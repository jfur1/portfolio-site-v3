import { useRef } from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Featured from '../components/sections/featured';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
// import { Hero, About, Contact, Featured, Projects } from '@/components/sections';

export default function Home() {
  const heroRef = useRef()
  const aboutRef = useRef()
  const featuredRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()

  return (
    <Layout location={'/'} featuredRef={featuredRef}>
      <div className={styles['styled-main']}>
        <Hero ref={heroRef}/>
        <About ref={aboutRef}/>
        <Featured ref={featuredRef}/>
        <Projects ref={projectsRef}/>
        <Contact ref={contactRef}/>
      </div>
    </Layout>
  )
}
