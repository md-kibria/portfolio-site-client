import React from 'react'
import Contact from '../../Components/contact/Contact'
import Layout from '../../Components/layout/Layout'
import Head from 'next/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head>
                <title>Contact | Md Kibria</title>
            </Head>
            <div id="spacer"></div>
            <Contact />

            <style jsx>{`
                @media (max-width: 768px) {
                    #spacer {
                        height: 70px;
                    }
                }
            `}</style>

        </Layout>
    )
}

export default ContactPage
