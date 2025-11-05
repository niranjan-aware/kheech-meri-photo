import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import HeroContent from './HeroContent';
import FloatingSparkles from './FloatingSparkles';
import { unsplashImages } from '@data/unsplashImages';
import heroVideo from '@/assets/VN20250923_011153~2.mp4';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video playing successfully");
            setIsVideoLoaded(true);
          })
          .catch(error => {
            console.log("Video autoplay prevented:", error);
          });
      }
    }
  }, []);

  const handleVideoError = (e) => {
    console.error("Video error:", e);
    setHasVideoError(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-end pb-20 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {!hasVideoError ? (
          <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={handleVideoError}
              className="absolute"
              style={{
                transform: 'rotate(-90deg) scale(1.8)',
                transformOrigin: 'center center',
                width: '56.25vh',
                height: '177.78vh',
                maxWidth: 'none',
                objectFit: 'cover',
              }}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={unsplashImages.hero[0]}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-rose-900/10 via-transparent to-champagne-900/10 z-10"
        />
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <FloatingSparkles />
      </div>

      <div className="relative z-30 w-full pointer-events-auto">
        <HeroContent />
      </div>

      <div className="absolute mb-5" />
    </section>
  );
};

export default HeroSection;