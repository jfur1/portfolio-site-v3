import React from 'react'
import styles from '../../styles/About.module.scss'
import Image from 'next/image'

const about = () => {
  return (
    <section className={styles.main} id='about'>
      <div className={styles['section-title']}>
          {/* <p className={styles["number"]}>{'01. '}</p> */}
          <h2 className={styles["title"]}>About Me</h2>
      </div>
      <div className={styles["inner"]}>
        <div className={styles.abouteDesc}>
            <p >
              {`Hello! My name is John and I enjoy building things for the web.`}
            </p>
            <p>
              {`I graduated with my degree in computer science in 2016 and I've had the privelage of working with small business clients as well as in a large scale production environment at Western Union.`}
            </p>
            <p>
              {`I am experienced in creating outstanding user experiences, from interfaces to APIs.`}
            </p>
              {`Here are a few of the technologies I've worked with recently:`}
            <ul className={styles.skillsGrid}>
              <li>{`JavaScript (ES6+)`}</li>
              <li>{`React.js / Next.js`}</li>
              <li>{`MySQL`}</li>
              <li>{`Node.js`}</li>
              <li>{`C++`}</li>
              <li>{`TypeScript`}</li>
            </ul>
            </div>
          <div className={styles["image-container"]}>
            <div className={styles["wrapper"]}>
              <Image
                src='/me.jpg'
                priority={true}
                className={styles['img']}
                alt="Picture of me"
                height={400}
                width={400}
                layout="responsive"
              />
            </div>
          </div>
        </div>
    </section>
  )
}

export default about