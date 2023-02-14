import React, { useState, useEffect } from 'react'
import styles from '../styles/LoadingSpinner.module.scss'
import SpinningGlobe from '@/components/icons/SpinningGlobe'
import { Helmet } from 'react-helmet';

const spinner = ({ finishLoading } : any) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentName, setCurrentName] = useState(0);
  const hellos = [ 'Hello', 'Bonjour', 'こんにちは', '你好', 'привет', 'Hallo', 'नमस्ते', 'Hola', '안녕하세요', 'Ciao',]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
      finishLoading()
    }, 4000);
    return () => {
      clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    let intervalId : any;

    if (currentName === hellos.length - 1) {
      clearInterval(intervalId);
      return;
    }

    if(currentName === 0){
      intervalId = setInterval(() => {
        setCurrentName(1);
      }, 2000);
    } else {
      intervalId = setInterval(() => {
        setCurrentName((currentName + 1) % hellos.length);
      }, 200);
    }

    return () => clearInterval(intervalId);
  }, [currentName]);

  return (
    <div className={styles['main']}>

      <Helmet>
          <body style={{ visibility: 'hidden' }} />
      </Helmet>
      
      <div  className={styles["name-row"]}>

        <div
          className={styles["loading-name"]}
          style={{ 
            animationDuration: currentName === 0 ? "2s" : "0.25s",
            display: 'flex' ,
          }} 
        >            
        <span className={styles["dot"]} id={styles['left']}/>
          {hellos[currentName]}
        <span className={styles["dot"]} id={styles['right']}/>
        </div>
      </div>
    </div>

  )
}

export default spinner