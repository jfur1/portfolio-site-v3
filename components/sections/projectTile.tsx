import React from 'react'
import styles from '../../styles/Projects.module.scss'
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectTile = ({ project } : any) => {
    const { title, desc, githubLink, externalLink } = project

    return (
        <li className={styles.projectTile}>
            <div className={styles.icons}>
                <FiFolder style={{ transform: 'scale(2)' }} />
                <span className={styles.links}>
                    {githubLink !== '' &&
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                        <FiGithub style={{ transform: 'scale(1.5)', }} />
                    </a>}
                    {externalLink !== '' &&
                    <a href={externalLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                        <FiExternalLink style={{ transform: 'scale(1.5)', marginLeft: '1em' }} />
                    </a>}
                </span>
            </div>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={styles.desc}>
                {desc}
            </div>
            <ul className={styles.stack}>
                {project.stack.map((techItem : any, idx : number) => 
                    <li className={styles.techName} key={'item-' + idx}>
                        {techItem}
                    </li>
                )}
            </ul>
        </li>
    )
}

export default ProjectTile