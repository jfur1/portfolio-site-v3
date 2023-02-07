import React from 'react'
import { socialMedia } from '@/components/config';
import styles from '../styles/Layout.module.scss'
import { Icon } from '@/components/icons';

const social = () => {
  return (
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
  )
}

export default social