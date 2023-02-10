import React, { useState, useEffect } from 'react'
import styles from '../styles/Layout.module.scss'
import { email } from '@/components/config';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const emailBar = ({ isHome } : any) => {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (    
    <TransitionGroup>
      {isMounted && (        
        <CSSTransition classNames={'fadeup'} timeout={2000}>
          <div className={styles['bar']} id={styles['right']}>
            <div className={styles["email-wrapper"]}>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

export default emailBar