import Head from 'next/head'
import Hero from './components/Hero';
import Brand from './components/Brand';
import HighQuality from './components/HighQuality';
import Portfoliio from './components/Portofolio';
import Courses from './components/Courses';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div style={{
      backgroundColor: "#F8F9FC"
    }}>
      <Head>
        <title>TechTime</title>
        <meta name="description" content="TechTime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Brand />
      <HighQuality />
      <Portfoliio />
      <Courses />
      <Community />
      <FAQ />
      <Footer />
    </div>
  )
}
