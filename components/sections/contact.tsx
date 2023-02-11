import React, { useEffect, useRef } from 'react'
import styles from '../../styles/Contact.module.scss'
import { email } from '@/components/config';

const contact = () => {
  return (
    <section 
      id='contact' 
      className={styles['main']}
      data-aos="fade-up" 
      data-aos-easing='ease-in-out'
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-once="true"
    >
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