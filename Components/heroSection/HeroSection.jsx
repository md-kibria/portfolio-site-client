import React, { useContext } from 'react'
import Link from 'next/link'
import styles from './HeroSection.module.scss'
import withSiteData from '../HOC/index'

const Hero = ({ siteData }) => {

    if (siteData) {
        return (
            <div className={styles.heroSection}>
                <div className={styles.heroSection_main}>
                    {/* Hero text section */}
                    <div className={styles.hero_text}>
                        {/* Hero title */}
                        <h1>{siteData.data.heroTitle1} <span>{siteData.data.heroTitle2}</span></h1>
                        {/* Hero Text */}
                        <p>{siteData.data.heroDesc}</p>
                        {/* hero button */}
                        <div className={styles.hero_btns}>
                            <Link href="/about">
                                <span className={styles.btn_rm}>Read More</span>
                            </Link>
                            <Link href="/projects">
                                <button type="button" className={styles.btn_pj}>My Projects</button>
                            </Link>
                        </div>
                    </div>
                    {/* Hero Image Section */}
                    <div className={styles.hero_img}>
                        <img src={siteData.data.heroImg && `${process.env.NEXT_PUBLIC_LINK}/uploads/${siteData.data.heroImg}`} alt="" />
                    </div>
                </div>
                <img className={styles.header_bottom_path} src="/img/Path 1.png" alt="" />
            </div>
        )
    }
}

export default withSiteData(Hero)
