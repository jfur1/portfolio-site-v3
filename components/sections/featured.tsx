import React, { useEffect, useRef } from 'react'
import styles from '../../styles/Featured.module.scss'
import { featuredProjects } from '@/components/config';
import Icon from '../icons/icon';
import Image from 'next/image'

const featured = () => {
  return (
      <section className={styles.main} id='featured'>
        <div className={styles['section-title']} >
          <h2 
            className={styles["title"]}
            data-aos="fade-up" 
            data-aos-easing='ease-in-out'
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-once="true"
          >Recent Work</h2>
        </div>

        <div className={styles["featured-projects-grid"]} >
        {featuredProjects &&
          featuredProjects.map((project, i) => {
            const { title, desc, githubLink, externalLink, stack, image } = project;

            return (
              <div 
                className={styles['featured-project']} 
                key={i}
                data-aos-once="true"
                data-aos="fade-up" 
                data-aos-easing='ease-in-out'
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <div className={styles["project-content"]}>
                  <div >
                    <p className={styles["project-overline"]}>Featured Work</p>

                    <h3 className={styles["project-title"]}>
                      {!!externalLink ?
                        <a href={externalLink} target="_blank" rel="noreferrer" >{title}</a>
                        : <p className={styles["title"]}>{title}</p>
                        }
                    </h3>

                    <div
                      className={styles["project-description"]}
                      dangerouslySetInnerHTML={{ __html: desc }}
                    />

                    {stack.length && (
                      <ul className={styles["project-tech-list"]}>
                        {stack.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className={styles["project-links"]}>

                      {githubLink && (
                        <a href={githubLink} aria-label="GitHub Link" target="_blank" rel="noreferrer" >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {externalLink && (
                        <a href={externalLink} aria-label="External Link" className={styles["external"]}  target="_blank" rel="noreferrer">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles["project-image"]} >
                  <a href={externalLink ? externalLink : githubLink ? githubLink : '#'}  target="_blank" rel="noreferrer" >
                    <Image 
                      priority={true}
                      src={image} 
                      alt={title} 
                      className={styles["featured-project-img"]} 
                      layout="fill"
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      750px"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
  )
}

export default featured