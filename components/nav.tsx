import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.scss'
import { Icon } from '@/components/icons'
import { navLinks } from '@/components/config';
import Menu from './menu'
import useScrollDirection from '@/custom-hooks/useScrollDirection';

const nav = ({ isHome }: any) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection({ 
    initialDirection: "down", 
    thresholdPixels: null, 
    off: null
  });
  // console.log(navLinks)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const scrollTo = (ref : any) => {
    console.log(ref.current)
    if (!ref.current) return;
    ref.current.scrollIntoView({ alignToTop: false , behavior: "smooth" });
  }

  const NavLogo = (
    <div className={styles['logo']}  tabIndex={-1} onClick={scrollToTop}>
      <a href='#' aria-label='home'>
        <Icon name="Globe"/>
      </a>
    </div>
  )
  const ResumeLink = (
    <a className={styles["resume-button"]} href='john_furlong_resume_2023.pdf' target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
    <header 
      className={styles['header']} 
      style={
        scrollDirection === 'up' && !scrolledToTop ? 
        {
          height: 'var(--nav-scroll-height)',
          transform: `translateY(0px)`,
          transition:  `all 0.12s cubic-bezier(0.645, 0.045, 0.355, 1)`

        } : scrollDirection === 'down' && !scrolledToTop ?
          { 
            height : 'var(--nav-scroll-height)',
            transform: `translateY(calc(var(--nav-scroll-height) * -1))`,
            transition:  `all 0.12s cubic-bezier(0.645, 0.045, 0.355, 1)`
          } : {}
      }
    >
      <nav className={styles['nav']}>
        {NavLogo}

        <div className={styles["links"]}>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <a href={`${url}`} onClick={scrollTo}>
                    {name}
                  </a>
                </li>
              ))}
          </ol>
          <div>{ResumeLink}</div>
        </div>
          
        <Menu/>
              
      </nav>
    </header>
  )
}

export default nav