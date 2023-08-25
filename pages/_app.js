import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useState } from 'react';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }) {
  const [showLoader , setShowLoader] = useState(true);
  if(showLoader){
    return <Loader setShowLoader={setShowLoader} />
  }
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
