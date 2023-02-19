import React, { useState } from 'react'
import styles from '../../styles/Projects.module.scss'
import { moreProjects } from '@/components/config';
import ProjectTile from './projectTile'

const projects = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore)
  return (
    <section 
      className={styles['more-projects']} 
      id='projects'
    >

      <div className={styles["section-title"]} >
        {/* <p className={styles["number"]}>{'03. '}</p> */}
        <div className={styles["title"]}>Other Noteworthy Projects</div>
      </div>

      <ul className={styles["more-projects-grid"]}>
        {moreProjects.map((project, idx) => 
            showMore || idx < 6 ?
              (
                <div 
                  data-aos="fade-up" 
                  data-aos-easing='ease-in-out'
                  data-aos-delay={`${idx}00`}
                  data-aos-duration="500"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-once="true"
                >
                  <ProjectTile project={project} key={idx} /> 
                </div>
              )
          : null
        )}
      </ul>

      {moreProjects?.length > 6
        ? 
          <button className={styles.toggleMore} onClick={toggleShowMore}>
              { showMore ? 
                  <span>Show Less</span> 
                  : <span>Show More</span> 
              }
          </button>
      : null
      }

    </section>
  )
}

export default projects