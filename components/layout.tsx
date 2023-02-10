import React, { useState, useEffect } from 'react'
import styles from '../styles/Layout.module.scss'
import Head from './head'
import LoadingSpinner from './loadingSpinner'
import Nav from './nav'
import Email from './email'
import Social from './social'
import Footer from './footer'
import { useRouter } from 'next/router'

const layout = ({ children, href } : any) => {
    const router = useRouter()
    const location = router.pathname 
    const id = router.asPath.substring(2, router.asPath.length); // location.hash without the '#'
    const isHome = location === '/' ;
    const [isLoading, setIsLoading] = useState(isHome);
    console.log('LAYOUT LOCATION:', location)
    console.log('LAYOUT id:', id)

    // Sets target="_blank" rel="noopener noreferrer" on external links
    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll('a'));
        if (allLinks.length > 0) {
        allLinks.forEach(link => {
            if (link.host !== window.location.host) {
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('target', '_blank');
            }
        });
        }
    };

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (router.asPath) {
            const id = router.asPath.substring(2, router.asPath.length); // location.hash without the '#'
            setTimeout(() => {
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView();
                el.focus();
              }
            }, 0);
          }

        handleExternalLinks();
    }, [isLoading]);

    return (
    <>
        <Head/>
        <div id={styles["root"]}>
            {isLoading && isHome ?
                <LoadingSpinner finishLoading={() => setIsLoading(false)} />
            :
            
                <div className={styles['body']} >
                    <Nav isHome={isHome} />
                    <Social isHome={isHome} />
                    <Email isHome={isHome} />
        
                    <div id="content" className={styles['content']}>
                        {children}
                        <Footer />
                    </div>
                </div>
            }

        </div>
    </>
    )
}

export default layout