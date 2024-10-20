import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/About.module.scss'
import Image from 'next/image'

const about = () => {
  return (
    <section 
      className={styles.main}
      id='about'
      data-aos="fade-up" 
      data-aos-easing='ease-in-out'
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <div className={styles['section-title']}>
        <h2 className={styles["title"]}>About Me</h2>
      </div>
      <div className={styles["inner"]}>
        <div className={styles.aboutDesc}>
            <p>
              {`Hello! My name is John and I enjoy building things for the web.`}
            </p>
            <p>
              {`My experience spans full-stack web development, secure cloud infrastructure, and complex data pipelines, allowing me to contribute across a broad range of projects. Driven by a passion for continuous learning and embracing new challenges, I am committed to advancing my skills and pushing the boundaries of what's possible in the field of software, aerospace, and atmospheric sciences.
              `}
            </p>

            {/* <p>
              {`I graduated with my degree in computer science in 2020 and I've had the privelage of working with small business clients as well as in a large scale production environment at Western Union. Currently working as a software engineer at Orion Space Solutions.`}
            </p> */}
            <p className={styles.caption}>
              {`
              In my current role, I am grateful to have contributed to impactful projects with leading organizations such as NASA, NOAA, and DARPA. I developed an earth-observation digital twin for NOAA, creating a solution for processing and visualizing high-resolution depictions of global weather conditions using satellite and ground observations. I also spearheaded development on a cloud-based “AI as a Service” platform, empowering AI/ML scientists to deploy, train, and host models efficiently. These opportunities have not only expanded my technical expertise but also strengthened my ability to solve complex challenges and collaborate across disciplines.
              `}
            </p>

            <p className={styles.gridDesc}>{`Here are a few of the technologies I've worked with recently:`}</p>
            
            <ul className={styles.skillsGrid}>
              <li>{`React.js / Next.js`}</li>
              <li>{`Python / FastAPI`}</li>
              <li>{`PostgreSQL`}</li>
              <li>{`Node.js`}</li>
              <li>{`Docker`}</li>
              <li>{`Kubernetes`}</li>
            </ul>
            </div>
          <div className={styles["image-container"]}>
            <div className={styles["wrapper"]}>
              <Image
                priority={true}
                src='/john-furlong-headshot-2023-2.png'
                className={styles['img']}
                alt="Picture of me"
                layout="fill"
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
              />
            </div>
          </div>
        </div>
    </section>
  )
}

export default about