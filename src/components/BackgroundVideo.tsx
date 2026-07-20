import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const currentTarget = useRef(0);
  const seekPending = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // We will use HLS.js or native depending on support.
    // The source provided is an MP4, but if HLS.js works we'll configure it per instructions,
    // though HLS.js usually expects an m3u8. We will implement exactly as requested.
    const src = 'https://website-assets-precious-ogungbile.s3.eu-north-1.amazonaws.com/Let_it_look_construction_ish_t.mp4';
    let hls: Hls | null = null;

    if (Hls.isSupported() && !src.endsWith('.mp4')) {
      hls = new Hls({
        maxBufferLength: 120,
        maxMaxBufferLength: 600,
        maxBufferSize: 20 * 1024 * 1024,
        startPosition: 0,
        capLevelToPlayerSize: false,
        startLevel: -1,
        autoStartLoad: true
      });
      
      hls.loadSource(src);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        const maxLevel = data.levels.length - 1;
        hls!.currentLevel = maxLevel;
        hls!.startLevel = maxLevel;
      });

      hls.on(Hls.Events.FRAG_BUFFERED as any, () => {
        if (video.buffered.length > 0) {
           const bufferedEnd = video.buffered.end(video.buffered.length - 1);
           const duration = video.duration || 1;
           const loaded = (bufferedEnd / duration) * 100;
           setProgress(Math.min(Math.round(loaded), 100));
        }
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          hls!.destroy();
          video.src = src;
          // Simulate progress since it's an MP4 now
          let simProgress = 0;
          const interval = setInterval(() => {
            simProgress += 10;
            setProgress(Math.min(simProgress, 99));
          }, 50);
          video.addEventListener('canplay', () => {
            clearInterval(interval);
            setProgress(100);
          }, { once: true });
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS (Safari)
      video.src = src;
      video.load();
      // Simulate progress since FRAG_BUFFERED won't fire for native
      let simProgress = 0;
      const interval = setInterval(() => {
        simProgress += 10;
        setProgress(Math.min(simProgress, 99));
      }, 50);
      video.addEventListener('canplay', () => {
        clearInterval(interval);
        setProgress(100);
      }, { once: true });
    } else {
      // Fallback for MP4 on non-Safari browsers since it's an MP4 link
      video.src = src;
      video.load();
      let simProgress = 0;
      const interval = setInterval(() => {
        simProgress += 10;
        setProgress(Math.min(simProgress, 99));
      }, 50);
      video.addEventListener('canplay', () => {
        clearInterval(interval);
        setProgress(100);
      }, { once: true });
    }

    const handleCanPlay = () => {
      setProgress(100);
      setIsLoaded(true);
    };
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);
    video.addEventListener('error', handleCanPlay);
    
    if (video.readyState >= 2) {
      handleCanPlay();
    }
    
    // Throttle Seeking Logic
    const doSeek = () => {
      if (!video) return;
      if (video.seeking) {
        seekPending.current = true;
        return;
      }
      video.currentTime = currentTarget.current;
      seekPending.current = false;
    };

    const handleSeeked = () => {
      if (seekPending.current) {
        doSeek();
      }
    };
    
    video.addEventListener('seeked', handleSeeked);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
      video.removeEventListener('seeked', handleSeeked);
      if (hls) hls.destroy();
    };
  }, []);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    const doSeek = () => {
      if (!video) return;
      if (video.seeking) {
        seekPending.current = true;
        return;
      }
      video.currentTime = currentTarget.current;
      seekPending.current = false;
    };

    const setupScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          if (video && isFinite(video.duration)) {
             currentTarget.current = self.progress * video.duration;
             doSeek();
          }
        }
      });
    };

    if (video.readyState >= 1) {
      setupScrollTrigger();
    } else {
      video.addEventListener('loadedmetadata', setupScrollTrigger);
    }
    
    return () => {
      video.removeEventListener('loadedmetadata', setupScrollTrigger);
    }
  }, { scope: wrapperRef });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const moveX = (e.clientX / window.innerWidth - 0.5) * 2;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 2;
      
      gsap.to(containerRef.current, {
        x: moveX * -30,
        y: moveY * -30,
        duration: 1,
        ease: 'power2.out',
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
          <img 
            src="/cdp-logo.png" 
            alt="CDP Partnership" 
            className="w-48 md:w-56 h-auto animate-pulse mb-6" 
          />
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      <div ref={wrapperRef} className="fixed top-0 left-0 w-full h-full z-0 scale-[1.05] origin-center pointer-events-none">
        <div ref={containerRef} className="w-full h-full relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover scale-[1.35]"
            muted
            playsInline
            preload="auto"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
    </>
  );
}
