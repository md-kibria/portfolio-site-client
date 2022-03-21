import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './SingleProject.module.scss'
import Image from 'next/image'

const SingleProject = ({ img, title, tags, desc, id }) => {

    const [isSmall, setIsSmall] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 380) {
            setIsSmall(true)
        } else {
            setIsSmall(false)
        }
    }, [setIsSmall])

    let tagsArr = tags || []
    let projectTags = tagsArr.join(', ')

    return (
        <div className={styles.singleProject}>
            <div className={styles.singleProject_img}>
                <img
                    src={img}
                    alt={title}
                />
            </div>

            <div className={styles.singleProject_desc}>
                <h1>{title}</h1>
                <span>{projectTags}</span>
                <p>{isSmall ? desc.substr(0, 80) + '...' : desc}</p>
                <Link href="/projects/[id]" as={`/projects/${id}`}>Details</Link>
            </div>
        </div>
    )
}

export default SingleProject
