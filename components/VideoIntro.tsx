'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if intro has already been played in this session
    const played = sessionStorage.getItem('bmmw-intro-played');
    
    console.log('VideoIntro: Checking session storage, played:', played);
    
    if (played === 'true') {
      console.log('VideoIntro: Already played, hiding');
      setIsVisible(false);
      setIsLoading(false);
      return;
    }

    // Show the intro
    setIsVisible(true);

    // Safety timeout - if video doesn't load within 3 seconds, hide loading
    const loadingTimeout = setTimeout(() => {
      console.log('VideoIntro: Loading timeout - forcing video to show');
      setIsLoading(false);
      const video = videoRef.current;
      if (video) {
        video.play().catch((error) => {
          console.error('VideoIntro: Play after timeout failed:', error);
        });
      }
    }, 3000);

    // Wait for video to be ready
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        console.log('VideoIntro: Video metadata loaded');
        clearTimeout(loadingTimeout);
        setIsLoading(false);
        // Attempt to play
        video.play().then(() => {
          console.log('VideoIntro: Video playing successfully');
        }).catch((error) => {
          console.error('VideoIntro: Autoplay failed:', error);
          // If autoplay fails, still show video and let user click to start
        });
      };

      const handleCanPlay = () => {
        console.log('VideoIntro: Video can play');
        clearTimeout(loadingTimeout);
        setIsLoading(false);
        // Attempt to play if not already playing
        if (video.paused) {
          video.play().catch((error) => {
            console.error('VideoIntro: Play failed:', error);
          });
        }
      };

      const handleLoadedData = () => {
        console.log('VideoIntro: Video data loaded');
      };

      const handleError = (e: Event) => {
        console.error('VideoIntro: Video error:', e);
        clearTimeout(loadingTimeout);
        // Skip intro if video fails to load
        setTimeout(handleEnd, 500);
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      // Load the video
      video.load();

      return () => {
        clearTimeout(loadingTimeout);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const handleEnd = () => {
    console.log('VideoIntro: Ending');
    // Mark as played
    sessionStorage.setItem('bmmw-intro-played', 'true');
    setIsFadingOut(true);
    // Wait for fade out animation to complete before hiding
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('VideoIntro: Skipped by user');
    if (videoRef.current) {
      videoRef.current.pause();
    }
    handleEnd();
  };

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-white text-base animate-pulse">Ładowanie wideo...</div>
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover cursor-pointer"
        playsInline
        preload="auto"
        onEnded={handleEnd}
        onClick={handleSkip}
      >
        <source src="/openening_12_seconds_new.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje odtwarzania wideo.
      </video>

      {/* Skip button - appears after video starts playing */}
      {!isLoading && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 text-white/60 hover:text-white text-sm tracking-wide transition-all duration-300 opacity-0 animate-fadeIn bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm"
          style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
          aria-label="Skip intro"
        >
          Pomiń →
        </button>
      )}
    </div>
  );
}

