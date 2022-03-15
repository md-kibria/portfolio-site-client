import React from 'react'
import About from '../../Components/aboutForPage/About'
import Layout from '../../Components/layout/Layout'
import Head from 'next/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head>
                <title>About | Md Kibria</title>
            </Head>
            <About />
        </Layout>
    )
}

export default AboutPage
