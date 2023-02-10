import React, { useState, useEffect } from 'react'
import { socialMedia } from '@/components/config';
import styles from '../styles/Layout.module.scss'
import { Icon } from '@/components/icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const social = ({ isHome } : any) => {
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
          <div className={styles['bar']} id={styles['left']}>
            <div className={styles['social']}>
              {socialMedia &&
                socialMedia.map(({ url, name }, i) => (
                  <li key={i}>
                    <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                      <Icon name={name} />
                    </a>
                  </li>
                ))}
            </div>
          </div>
          </CSSTransition>
      )}
    </TransitionGroup>
  )
}

export default social