import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react'
import styles from './About.module.scss'
import withSiteData from '../HOC/index'
import saveResume from '../../utils/saveResume'

const About = ({ siteData, setAboutOT }) => {

    // Is Mid State
    const [isMid, setIsMid] = useState(false)
    const aboutRef = useRef()

    useEffect(() => {
        if (window.innerWidth < 950 && window.innerWidth > 768) {
            setIsMid(true)
        } else {
            setIsMid(false)
        }
    }, [])

    useEffect(() => {
        setAboutOT(aboutRef.current.offsetTop)
    }, [setAboutOT])

    const handleSaveResume = () => {
        saveResume(siteData.resume)
    }

    // Defind about text
    let desc = siteData.aboutText || ''

    return (
        <div className={styles.about} ref={aboutRef} >

            {/* About Image Section */}
            <div className={styles.about_img}>
                <div className={styles.img_container}>
                    <img src={siteData.aboutImg && `${process.env.NEXT_PUBLIC_URL}/uploads/${siteData.aboutImg}`} alt="About Img" />
                </div>
            </div>

            {/* About Text Section */}
            <div className={styles.about_text}>
                {/* About title */}
                <h2>About <span>Me</span></h2>

                {/* About short brif */}
                <p>{isMid ? desc.substr(0, 130) + '...' : desc.substr(0, 225) + '...'}</p>

                {/* About btns */}
                <div className={styles.about_btns}>
                    <Link href="/about">Read More</Link>
                    <p onClick={handleSaveResume}>Resume</p>
                </div>
            </div>
        </div>
    )

}

export default withSiteData(About)
