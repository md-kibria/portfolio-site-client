import Link from 'next/link'
import styles from './ProjectDetails.module.scss'

const ProjectDetails = ({ project }) => {

    return (
        <div className={styles.details}>
            <h1 className={styles.title}>{project.title}</h1>

            {/* Main */}
            <div className={styles.details_main}>
                {/* Image Section */}
                <div className={styles.img_section}>
                    <img src={`${process.env.NEXT_PUBLIC_URL}/uploads/${project.thumbnail}`} alt={project.title} />
                </div>

                {/* Details Section */}
                <div className={styles.details_section}>
                    {/* Sub Section */}
                    {project.tools.length !== 0 ? (
                        <div className={styles.sub_section}>
                            <h3>Tools</h3>
                            <p>{project.tools.join(', ')}</p>
                        </div>
                    ) : ''
                    }

                    {/* Sub Section */}
                    {project.tags.length !== 0 ? (
                        <div className={styles.sub_section}>
                            <h3>Tags</h3>
                            <p>{project.tags.join(', ')}</p>
                        </div>
                    ) : ''
                    }

                    {/* Sub Section */}
                    {project.liveLink ? (
                        <div className={styles.sub_section}>
                            <h3>Live Links</h3>
                            <Link href={project.liveLink}>
                                <p style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                    {project.liveLink}
                                </p>
                            </Link>
                        </div>
                    ) : ''
                    }

                    {/* Sub Section */}
                    {project.githubLink ? (
                        <div className={styles.sub_section}>
                            <h3>Github Links</h3>
                            <Link href={project.githubLink}>
                                <p style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                    {project.githubLink}
                                </p>
                            </Link>
                        </div>
                    ) : ''
                    }
                </div>
            </div>

            {/* Screenshorts */}
            {project.screenshot.length !== 0 ? (
                <div className={styles.screenshorts}>
                    <h3>Screenshorts</h3>
                    <div className={styles.screenshorts_container}>

                        {project.screenshot.map(ss => (
                            // Short Item 
                            <div key={ss} className={styles.short_item}>
                                <img src={`${process.env.NEXT_PUBLIC_URL}/uploads/${ss}`} alt="ss" />
                            </div>
                        ))}

                    </div>
                </div>
            ) : ''
            }

            {/* Description */}
            {project.description ? (
                <div className={styles.description}>
                    <h3>Description</h3>
                    <div className={styles.description_container}>
                        <p>
                            {project.description}
                        </p>
                    </div>
                </div>
            ) : ''
            }

            {/* I HAVE NEED TO WORKING ON THIS ""RELATED PROJECT"" SECTION */}


     
        <div style={{display: 'none'}}>{`
        
            {/* Similar Projects */}
            <div className={styles.similar}>
                <h3>Similar Projects</h3>
                <div className={styles.similar_container}>
                    {/* Item */}
                    <div className={styles.similar_item}>
                        {/* Img Section */}
                        <div className={styles.img}>
                            <img src="/img/p3.jpeg" alt="project title" />
                        </div>
                        {/* Text Section */}
                        <div className={styles.text}>
                            <h3>Another Project</h3>
                            <p>Lorem ipsum dolor</p>
                            <button><Link href="/">Details</Link></button>
                        </div>
                    </div>

                    {/* Item */}
                    <div className={styles.similar_item}>
                        {/* Img Section */}
                        <div className={styles.img}>
                            <img src="/img/p7.jpeg" alt="project title" />
                        </div>
                        {/* Text Section */}
                        <div className={styles.text}>
                            <h3>Another Project</h3>
                            <p>Lorem ipsum dolor</p>
                            <button><Link href="/">Details</Link></button>
                        </div>
                    </div>

                    {/* Item */}
                    <div className={styles.similar_item}>
                        {/* Img Section */}
                        <div className={styles.img}>
                            <img src="/img/p5.jpeg" alt="project title" />
                        </div>
                        {/* Text Section */}
                        <div className={styles.text}>
                            <h3>Another Project</h3>
                            <p>Lorem ipsum dolor</p>
                            <button><Link href="/">Details</Link></button>
                        </div>
                    </div>

                    {/* Item */}
                    <div className={styles.similar_item}>
                        {/* Img Section */}
                        <div className={styles.img}>
                            <img src="/img/p2.jpeg" alt="project title" />
                        </div>
                        {/* Text Section */}
                        <div className={styles.text}>
                            <h3>Another Project</h3>
                            <p>Lorem ipsum dolor</p>
                            <button><Link href="/">Details</Link></button>
                        </div>
                    </div>

                </div>
            </div>

            `} </div>

        </div>
    )
}

export default ProjectDetails
