import React, { useState, useEffect } from 'react'
import styles from '../../styles/Hero.module.scss'
import { email } from '@/components/config';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const hero = ({ isHome } : any) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  const one = <h1 className={styles["line-1"]}>Hi, my name is</h1>
  const two = <h2 className={styles["line-2"]}>John Furlong.</h2>
  const three = <h3 className={styles["line-3"]}>Full Stack Software Engineer</h3>
  const four = (
    <p className={styles["line-4"]}>
      {`I'm a software engineer specialized in building scalable systems for the web. I enjoy creating outstanding user experiences end to end, whether it's an interface or an API.`}
    </p>
  )
  const five = (<a onClick={scrollToBottom} className={styles["email-link"]}>Contact Me</a>)
  const elements = [ one, two, three, four, five ]

  return (
    <section className={styles.main}>
      <TransitionGroup>
        {
          isMounted && 
            elements.map((el, idx) => (
              <CSSTransition 
                key={idx} 
                classNames={'fadeup'}
                timeout={4000} 
              >
                <div style={{ transitionDelay: `${idx + 1}00ms` }}>
                  {el}
                </div>
              </CSSTransition>
            ))
        }
        </TransitionGroup>
    </section>
  )
}

export default hero