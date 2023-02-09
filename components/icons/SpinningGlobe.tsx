import React from 'react'
import styles from '../../styles/SpinningGlobe.module.scss'

const SpinningGlobe = () => {
  return (
    <div className={styles["digital-ball"]}>
        <div className={styles["overlay"]}></div>
        <div className={styles["globe"]}>
        <div className={styles["globe-wrap"]}>
            <div className={styles["circle"]}></div>
            <div className={styles["circle"]}></div>
            <div className={styles["circle"]}></div>
            <div className={styles["circle-hor"]}></div>
            <div className={styles["circle-hor-middle"]}></div>
        </div>
        </div>
    </div>
  )
}

export default SpinningGlobe