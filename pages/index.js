import Layout from '../Components/layout/Layout'
import HeroSection from '../Components/heroSection/HeroSection'
import About from '../Components/about/About'
import Skills from '../Components/skills/Skills'
import Projects from '../Components/projects/Projects'
import Contact from '../Components/contact/Contact'
import axios from 'axios'

export default function Home({data}) {

  console.log('I am index.js')

  return (
    <Layout home="true">
      <HeroSection />
      <About />
      <Skills />
      <Projects projects={data.projects} />
      <Contact />
    </Layout>
  )
}


export const getServerSideProps = async () => {
  // Fetch the data
  const res = await axios.get('projects')

  if(!res.data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data: res.data
    }
  }
}