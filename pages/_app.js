import PageLayouts from '../components/PageLayouts'
import Header from '../components/Header.js'
import React,{useEffect, useState} from 'react';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isRender,setRender] = useState(false);

  useEffect(()=>{
    setRender(true);
  });
  return  isRender && (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
