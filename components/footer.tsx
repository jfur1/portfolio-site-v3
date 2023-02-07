import React from 'react'
import styles from '../styles/Footer.module.scss'
import { socialMedia } from '@/components/config';
import Icon from './icons/icon';
import { email } from '@/components/config';

const footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  const formattedTime = (date) => {
    return date.toLocaleTimeString([], { timeZoneName: 'short', hour12: true, hour: '2-digit', minute: '2-digit' })
  }
  return (
    <footer className={styles['footer']}>
      <div className={styles["contact-items"]}>

        <div className={styles['footer-contact-row']}>
          <Icon name='Email'/>
          <p className={styles["email"]}>{email}</p>
          <p>&nbsp;|</p>
          <ul className={styles['social-icons-row']}>
            {socialMedia &&
              socialMedia.map(({ url, name }, i) => (
                <li key={i}>
                  <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                    <Icon name={name}/>
                  </a>
                </li>
              ))}
          </ul>
        </div>

      </div>
      <p className={styles['copy']}>John Furlong | {year} &copy; Edition</p>
    </footer>
  )
}

export default footer