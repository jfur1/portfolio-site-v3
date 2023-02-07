import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Menu.module.scss'
import { navLinks } from '@/components/config';
import useOnClickOutside from '@/custom-hooks/useOnClickOutside';
import Link from 'next/link'
import { Helmet } from 'react-helmet';

const menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const buttonRef = useRef(null);
    const navRef = useRef(null);
    const wrapperRef = useRef(null);
    useOnClickOutside(wrapperRef, () => setMenuOpen(false));

    const scrollTo = (ref) => {
        setMenuOpen(false)
        if (!ref.current) return;
        ref.current.scrollIntoView({ alignToTop: false , behavior: "smooth" });
    }

    return (
        <div className={styles.menu}>
            <Helmet>
                <body className={menuOpen ? 'blur' : ''} />
            </Helmet>
            <div ref={wrapperRef}>
                <button 
                    className={styles["hamburger-button"]}
                    onClick={toggleMenu}
                    ref={buttonRef}
                    aria-label="Menu"
                >
                    <div className={styles["hamburger-box"]}>
                        <div 
                            className={styles["hamburger-box-inner"] + ' ' + (menuOpen ? styles['open'] : '')}
                            style={{
                                transform: `rotate(${ menuOpen ? `225deg` : `0deg` })`,
                                transitionDelay: menuOpen ? `0.12s` : `0s`,
                                transitionTimingFunction: menuOpen ? 
                                    `cubic-bezier(0.215, 0.61, 0.355, 1)` 
                                    : `cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
                            }}
                        />
                    </div>
                </button>

                <aside 
                    className={styles['side-bar']}
                    style={{ 
                        'transform' : `translateX(${menuOpen ? 0 : 100})vw`,
                        'visibility': menuOpen ? 'visible' : 'hidden',
                    }}
                    id={styles['side-bar']}
                    tabIndex={menuOpen ? 1 : -1 }
                    aria-hidden={!menuOpen}
                >
                    
                    <nav ref={navRef} className={styles['nav']}>
                        <ol className={styles['nav-links']}>
                            {!!navLinks && navLinks.map(({ url, name }, i) => (
                            <li key={i}>
                                <a href={url} onClick={scrollTo}>
                                    {name}
                                </a>
                            </li>
                            ))}
                        </ol>
                        <a className={styles["resume-button"]} href='john_furlong_resume_2023.pdf' target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </nav>
                </aside>
            </div>
        </div>
    )
}

export default menu