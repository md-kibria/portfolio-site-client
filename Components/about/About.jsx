import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import styles from './About.module.scss'
import withSiteData from '../HOC/index'
import {BHContext} from '../../pages/_app'

const About = ({ siteData }) => {

    // Is Mid State
    const [isMid, setIsMid] = useState(false)

    // Host
    const host = useContext(BHContext)

    useEffect(() => {

        if (window.innerWidth < 950 && window.innerWidth > 768) {
            setIsMid(true)
        } else {
            setIsMid(false)
        }

    })


    if (siteData) {

        // Defind about text
        let desc = siteData.data.aboutText || ''

        return (
            <div className={styles.about}>

                {/* About Image Section */}
                <div className={styles.about_img}>
                    <div className={styles.img_container}>
                        <img src={siteData.data.aboutImg && `${host}/uploads/${siteData.data.aboutImg}`} alt="" />
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
                        <Link href="/resume">Resume</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withSiteData(About)
