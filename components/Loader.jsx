import React, { useEffect, useRef } from 'react';
import styles from '../styles/Loader.module.css';

const Loader = ({ setShowLoader }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.playbackRate = 2.0; // Set playback rate to 2x

    // Cleanup function
    return () => {
      video.playbackRate = 1.0; // Reset playback rate to default (1x)
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