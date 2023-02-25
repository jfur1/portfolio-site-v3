import React from 'react'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'
import Nav from '../components/nav'
import Email from '../components/email'
import Social from '../components/social'
import Footer from '../components/footer'

const NotFound = () => {
  return (
    <div className={styles['body']} >
      <Nav />
        <Social/>
        <Email />
        <div id="content" className={styles['content']}>
          <div className={styles['not-found']}>
            <h1 className={styles["number"]}>404</h1>
            <p className={styles["msg"]}>Page Not Found</p>
            <Link href='/' className={styles['go-home-btn']}>
              Go Home
            </Link>
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default NotFound