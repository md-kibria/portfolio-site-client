import { useEffect, useState } from 'react'
import Layout from '../Components/layout/Layout'
import HeroSection from '../Components/heroSection/HeroSection'
import About from '../Components/about/About'
import Skills from '../Components/skills/Skills'
import Projects from '../Components/projects/Projects'
import Contact from '../Components/contact/Contact'
import axios from 'axios'

export default function Home({ data, error }) {

  const [offsets, setOffset] = useState({})

  const [aboutOT, setAboutOT] = useState()
  const [skillOT, setSkillOT] = useState()
  const [projectOT, setProjectOT] = useState()
  const [contactOT, setContactOT] = useState()

  useEffect(() => {
    setOffset({
      // ...offsets,
      aboutOT,
      skillOT,
      projectOT,
      contactOT
    })
  }, [aboutOT, skillOT, projectOT, contactOT])

  return (
    <Layout home="true" offsets={offsets}>
      <HeroSection />
      <About setAboutOT={setAboutOT} />
      <Skills setSkillOT={setSkillOT} />
      <Projects projects={data ? data.projects : []} setProjectOT={setProjectOT} />
      <Contact setContactOT={setContactOT} />
    </Layout>
  )
}


export const getServerSideProps = async () => {
  try {
    // fetch data
    const res = await axios.get('/projects')

    if (!res.data) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        data: res.data
      }
    }
  } catch (error) {

    return {
      props: {
        error: error.message
      }
    }
  }
}