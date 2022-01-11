import Layout from '../../Components/layout/Layout'
import ProjectsSection from '../../Components/projectSectionForPage/Projects'
import axios from 'axios'

const Projects = ({data}) => {

    return (
        <Layout>
            <ProjectsSection projects={data.projects} />
        </Layout>
    )
}

export const getServerSideProps = async () => {
    // Get Project Data
    const data = await axios.get('projects')

    // Return the data 
    return {
        props: {
            data: data.data
        }
    }
}


export default Projects
