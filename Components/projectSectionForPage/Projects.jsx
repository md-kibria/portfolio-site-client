import styles from './Projects.module.scss'

import SingleProject from '../singleProject/SingleProject'
import Link from 'next/link'


const Projects = ({ projects }) => {

    console.log(projects)

    // Pagination Functions
    let postPerPage = 10
    let totalPosts = 100 //projects.length
    let totalPages = totalPosts / postPerPage

    let currPage = 4
    let numberOfEnd = postPerPage * currPage
    let numberOfStart = numberOfEnd - postPerPage + 1

    // console.log({ totalPages, numberOfEnd, numberOfStart })
    console.log({ totalPages, numberOfEnd, numberOfStart })

    return (
        <div className={styles.projects}>
            {/* Projects Title */}
            <h2 className={styles.projects_title}>My <span>Projects</span></h2>

            {projects.length !== 0 ? (

                <>

                    <div className={styles.projects_container}>
                        {projects.map(project => (
                            <SingleProject key={project._id} img={project.thumbnail && `${process.env.NEXT_PUBLIC_LINK}/uploads/${project.thumbnail}`} title={project.title} desc={project.description} />
                        ))}
                    </div>

                    <ul className={styles.pagination}>
                        <li className={styles.pagination_item + " " + styles.disabled}>
                            <Link href="/">«</Link>
                        </li>
                        <li className={styles.pagination_item + " " + styles.active}>
                            <Link href="/">1</Link>
                        </li>

                        <li className={styles.pagination_item}>
                            <Link href="/">2</Link>
                        </li>
                        <li className={styles.pagination_item}>
                            <Link href="/">3</Link>
                        </li>
                        <li className={styles.pagination_item}>
                            <Link href="/">»</Link>
                        </li>
                    </ul>

                </>

            ) : (<p>No Projects found!</p>)}

        </div>
    )
}

export default Projects