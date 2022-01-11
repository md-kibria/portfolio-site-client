import axios from 'axios'
import React from 'react'
import Layout from '../../Components/layout/Layout'
import ProjectDetails from '../../Components/projectDetails/ProjectDetails'

const Details = ({data}) => {
    return (
        <Layout>
            <ProjectDetails project={data.project} />
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    // Get the project
    const res = await axios.get(`projects/${context.params.id}`)

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

export default Details
