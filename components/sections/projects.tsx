import React, { useState } from 'react'
import styles from '../../styles/Projects.module.scss'
import { moreProjects } from '@/components/config';
import ProjectTile from './projectTile'

const projects = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore)
  return (
    <section className={styles['more-projects']} id='projects'>

      <h2 className={styles["section-title"]}>
        {/* <p className={styles["number"]}>{'03. '}</p> */}
        <div className={styles["title"]}>Other Noteworthy Projects</div>
      </h2>

      <ul className={styles["more-projects-grid"]}>
        {moreProjects.map((project, idx) => 
            showMore || idx < 6 ?
                <ProjectTile project={project} key={idx}/> 
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