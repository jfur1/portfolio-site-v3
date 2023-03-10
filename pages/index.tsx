import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'

import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Featured from '../components/sections/featured';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

export default function Home() {
  return (
    <Layout>
      <div className={styles['styled-main']}>
        <Hero/>
        <About/>
        <Featured/>
        <Projects/>
        <Contact/>
      </div>
    </Layout>
  )
}
