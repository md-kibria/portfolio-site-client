import React from 'react'
import Contact from '../../Components/contact/Contact'
import Layout from '../../Components/layout/Layout'

const ContactPage = () => {
    return (
        <Layout>
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
