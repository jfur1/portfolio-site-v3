import React from 'react'
import styles from '../styles/Layout.module.scss'
import { email } from '@/components/config';

const emailBar = ({ isHome } : any) => {
  return (
    <div className={styles['bar']} id={styles['right']}>
      <div className={styles["email-wrapper"]}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  )
}

export default emailBar