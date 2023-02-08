import React, { useState, useEffect } from 'react'
import styles from '../../styles/Hero.module.scss'
import { email } from '@/components/config';

const hero = ({ isHome } : any) => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
  return (
    <section className={styles.main}>
        <h1>Hi, my name is</h1>
        <h2>John Furlong.</h2>
        <h3>Full Stack Software Engineer</h3>
        <p>
            {`I'm a software engineer specialized in building scalable systems for the web. I enjoy creating outstanding user experiences end to end, whether it's an interface or an API.`}
        </p>
        <a onClick={scrollToBottom} className={styles["email-link"]}>
        {/* <a href={`mailto:${email}`} className={styles["email-link"]}> */}
            Contact Me
        </a>
    </section>
  )
}

export default hero