import React from 'react'
import styles from '../../styles/Contact.module.scss'
import { email } from '@/components/config';

const contact = () => {
  return (
    <section id='contact' className={styles['main']}>
       <div className={styles["section-title"]}>
          {/* <p className={styles["number"]}>{'04. '}</p> */}
          <h2 className={styles["sm-title"]}>What's Next?</h2>
       </div>
       <h2 className={styles["title"]}>Get In Touch</h2>
       <p className={styles["text"]}>
          Trying to get in touch? My inbox is always open. Feel free to send me an email and I'll try my best to get back to you!</p>

       <a className={styles["email-link"]} href={`mailto:${email}`}>
        Say Hello
      </a>
    </section>
  )
}

export default contact