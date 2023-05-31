import React from 'react';
import styles from '../styles/Loader.module.css'

const Loader = ({setShowLoader}) => {
  return (
    <div className={styles.loader}>
      <video autoPlay preload muted='auto' className={styles.customVideo} onEnded={() => setShowLoader(false)}>
        <source src="/assets/loader.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
