import React from 'react'
import styles from '../../styles/Hero.module.scss'

const hero = () => {
  return (
    <section className={styles.main}>
        <h1>Hi, my name is</h1>
        <h2>John Furlong.</h2>
        <h3>Full Stack Software Engineer</h3>
        <p>
            {`I'm a software engineer specialized in building scalable systems for the web. I enjoy creating outstanding user experiences end to end, whether it's an interface or an API.`}
        </p>
        <a href='' className={styles["email-link"]} target="_blank" rel="noreferrer">
            Contact Me
        </a>
    </section>
  )
}

export default hero