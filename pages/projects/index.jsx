import Layout from '../../Components/layout/Layout'
import ProjectsSection from '../../Components/projectSectionForPage/Projects'
import axios from 'axios'
import Head from 'next/head'
import { useState, useEffect } from 'react'

const Projects = () => {

    const [pageIndex, setPageIndex] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [data, setData] = useState([])

    const postPerPage = 10

    useEffect(async () => {
        const res = await axios.get(`projects?post=${postPerPage}&page=${pageIndex}`)
        setData(res.data)

        const resTotalPg = await axios.get(`projects`)
        setTotalPage(Math.ceil(resTotalPg.data.total / postPerPage))
    }, [pageIndex])

    return (
        <Layout>
            <Head>
                <title>Projects | Md Kibria</title>
            </Head>
                <ProjectsSection 
                    pageIndex={pageIndex} 
                    setPageIndex={setPageIndex} 
                    totalPage={totalPage}
                    projects={data.projects || data} 
                />
        </Layout>
    )
}


// export const getServerSideProps = async () => {
//     // Get Project Data
//     const data = await axios.get(`projects?post=2&page=${ppi}`)

//     // Return the data 
//     return {
//         props: {
//             data: data.data
//         }
//     }
// }


export default Projects
