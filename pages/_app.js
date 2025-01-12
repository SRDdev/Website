import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
