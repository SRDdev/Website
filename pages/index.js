import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Models from '../components/Models'
import Research from '../components/Research'

export default function Home() {
  return (
    <div style={{backgroundColor:"#ffffff"}}>
      <Head>
        <title>Shreyas Dixit</title>
        <meta name="description" content=" " />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Models />
    <Skills />
    <Projects />
    <Research />
    {/* <Contact /> */}
    </div>
  )
}
