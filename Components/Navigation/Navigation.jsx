import styles from './Navigation.module.scss'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { BHContext } from '../../pages/_app'
import axios from 'axios'

const Navigation = ({ home }) => {

    // Backend Host 
    let host = useContext(BHContext)

    const [show, setShow] = useState(false)
    const [showNavBg, setShowNavBg] = useState(false)
    const [logo, setLogo] = useState('')

    // Set BG color if scroll 40px top
    useEffect(async () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                setShowNavBg(true)
            } else {
                setShowNavBg(false)
            }
        })

        // Get Logo From Backend Server
        const res = await axios.get('siteInfo')

        // Set logo 
        if(res.data.siteInfo.logo) {
            setLogo(res.data.siteInfo.logo)
        } else {
            setLogo('')
        }

    }, [])

    // Navigation handler

    const goToSkills = () => {
        window.scrollTo(0, 500)
    }

    const goToContact = () => {
        window.scrollTo(0, 1500)
    }


    return (
        <nav className={showNavBg || !home ? styles.nav + ' ' + styles.bg : styles.nav}>
            {/* Nav Logo / Text */}
            <div className={styles.nav_logo}>
                <Link href="/">
                    <div className={styles.img}>
                        {logo ? (
                            <Image
                                src={`${host}/uploads/${logo}`}
                                alt=""
                                height={30}
                                width={100}
                            />
                        ) : (
                            <h2>Logo</h2>
                        )}
                    </div>
                </Link>
            </div>
            <div className={styles.nav_menus}>
                {/* nav icon */}
                <p className={styles.nav_icon} onClick={() => setShow(!show)}><i className={show ? "fa fa-times" : "fa fa-bars"}></i></p>

                {/* nav menu */}
                <ul className={show ? styles.menu + " " + styles.show : styles.menu}>

                    {/* nav menu item */}
                    <li className={styles.nav_item}>
                        <Link href="/">Home</Link>
                    </li>

                    {/* nav menu item */}
                    <li className={styles.nav_item}>
                        <Link href="/about">About</Link>
                    </li>

                    {/* nav menu item */}
                    <li className={styles.nav_item}>
                        <Link href="/skills">Skills</Link>
                    </li>

                    {/* nav menu item */}
                    <li className={styles.nav_item}>
                        <Link href="/resume">Resume</Link>
                    </li>

                    {/* nav menu item */}
                    <li className={styles.nav_item}>
                        <Link href="/projects">Projects</Link>
                    </li>

                    {/* nav menu item */}
                    <li className={styles.nav_item}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation