import React, { useEffect, useRef } from 'react';
import styles from '../styles/Loader.module.css';

const Loader = ({ setShowLoader }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Gradually increase the playback speed every 500ms
    const increasePlaybackSpeed = setInterval(() => {
      if (video.playbackRate >= 4.0) {
        clearInterval(increasePlaybackSpeed);
      } else {
        video.playbackRate += 0.1; // Increase by 0.1x
      }
    }, 500);

    // Cleanup function
    return () => {
      clearInterval(increasePlaybackSpeed);
    };
  }, []);

  return (
    <div className={styles.loader}>
      <video
        autoPlay
        preload
        muted='auto'
        className={styles.customVideo}
        onEnded={() => setShowLoader(false)}
        ref={videoRef}
      >
        <source src="/assets/loader.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
