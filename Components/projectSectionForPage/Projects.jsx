import styles from './Projects.module.scss'
import SingleProject from '../singleProject/SingleProject'


const Projects = ({ projects, setPageIndex, totalPage, pageIndex }) => {

    const setCurrentPage = value => {
        console.log(value)
        setPageIndex(value)
    }

    const goPrev = () => {
        if(pageIndex <= totalPage && pageIndex !== 1) {
            setPageIndex(v => v - 1)
        }
    }

    const goNext = () => {
        if (pageIndex < totalPage) {
            setPageIndex(v =>  v + 1)
        }
    }

    let pgArr = Array(totalPage)
    pgArr.fill('*')

    return (
        <div className={styles.projects}>
            {/* Projects Title */}
            <h2 className={styles.projects_title}>My <span>Projects</span></h2>

            {projects.length !== 0 ? (

                <>

                    <div className={styles.projects_container}>
                        {projects.map(project => (
                            <SingleProject
                                key={project._id}
                                id={project._id}
                                img={project.thumbnail && `${process.env.NEXT_PUBLIC_URL}/uploads/${project.thumbnail}`}
                                title={project.title}
                                desc={project.description}
                            />
                        ))}
                    </div>

                    <ul className={styles.pagination}>
                        <li className={`${styles.pagination_item} ${pageIndex <= totalPage && pageIndex === 1 ? styles.disabled : ''}`}>
                            <p onClick={goPrev}>«</p>
                        </li>

                        {pgArr.map((v, i) => (
                            <li key={i} className={`${styles.pagination_item} ${pageIndex === i + 1 ? styles.active : ''}`}>
                                <p onClick={() => setCurrentPage(i + 1)}>{i + 1}</p>
                            </li>
                        ))}

                        <li className={`${styles.pagination_item} ${pageIndex >= totalPage ? styles.disabled : ''}`}>
                            <p onClick={goNext}>»</p>
                        </li>
                    </ul>

                </>

            ) : (<p>No Projects found!</p>)}

        </div>
    )
}

export default Projects