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