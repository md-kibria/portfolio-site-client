import Head from 'next/head'
import React from 'react'
import Layout from '../../Components/layout/Layout'
import Skills from '../../Components/skills/Skills'

const SkillsPage = () => {
    return (
        <Layout>
            <Head>
                <title>Skills | Md Kibria</title>
            </Head>
            <div style={{height: '80px'}}></div>
            <Skills />
        </Layout>
    )
}

export default SkillsPage
