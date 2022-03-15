import styles from './Projects.module.scss'
import SingleProject from '../singleProject/SingleProject'
import Link from 'next/link'
import { useRef, useEffect } from 'react'


const Projects = ({ projects, setProjectOT }) => {

    // Ref
    const projectRef = useRef(null)

    useEffect(() => {
        setProjectOT(projectRef.current.offsetTop)
    }, [])

    return (
        <div className={styles.projects} ref={projectRef}>
            {/* Projects Title */}
            <h2 className={styles.projects_title}>My <span>Projects</span></h2>

            {/* Projects Container */}
            <div className={styles.projects_container}>
                {projects.length !== 0 ? projects.map(project => (
                    <SingleProject
                        key={project._id}
                        id={project._id}
                        img={`${process.env.NEXT_PUBLIC_URL}/uploads/${project.thumbnail}`}
                        title={project.title}
                        tags={project.tags}
                        desc={project.description}
                    />
                )) : (
                    <h1>No Projects</h1>
                )}

            </div>

            <Link href="/projects"><button className={styles.goToAll}>All Projects</button></Link>
        </div>
    )
}



export default Projects
