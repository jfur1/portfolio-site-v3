import React, { useState, useEffect } from 'react'
import styles from '../styles/Layout.module.scss'
import Head from './head'
import LoadingSpinner from '../components/loadingSpinner'
import Nav from './nav'
import Email from './email'
import Social from './social'
import Footer from './footer'

const layout = ({ location , children } : any) => {
    // console.log(children)
    const isHome = location.pathname === '/';
    const [isLoading, setIsLoading] = useState(true);
    const [currentPathname, setCurrentPathname] = useState(isHome);
    
    // Sets target="_blank" rel="noopener noreferrer" on external links
    // const handleExternalLinks = () => {
    //     const allLinks = Array.from(document.querySelectorAll('a'));
    //     if (allLinks.length > 0) {
    //     allLinks.forEach(link => {
    //         if (link.host !== window.location.host) {
    //         link.setAttribute('rel', 'noopener noreferrer');
    //         link.setAttribute('target', '_blank');
    //         }
    //     });
    //     }
    // };

    // useEffect(() => {
    //     if (isLoading) {
    //       return;
    //     }

    //     if (location.hash) {
    //       const id = location.hash.substring(1); // location.hash without the '#'
    //       console.log('ID:', id)
    //       setTimeout(() => {
    //         const el = document.getElementById(id);
    //         if (el) {
    //           el.scrollIntoView();
    //           el.focus();
    //         }
    //       }, 0);
    //     }
    
    //     handleExternalLinks();
    // }, [isLoading]);

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