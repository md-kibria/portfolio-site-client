import styles from './Navigation.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import saveResume from '../../utils/saveResume'

const Navigation = ({ home, offsets }) => {

    const router = useRouter()

    const [show, setShow] = useState(false)
    const [showNavBg, setShowNavBg] = useState(false)
    const [logo, setLogo] = useState('')
    const [resume, setResume] = useState('')

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
        if (res.data.siteInfo.logo) {
            setLogo(res.data.siteInfo.logo)
            setResume(res.data.siteInfo.resume)
        } else {
            setLogo('')
            setResume('')
        }

    }, [])

    let initOffsets = {
        aboutOT: 0,
        skillOT: 0,
        projectOT: 0,
        contactOT: 0
    }

    const { aboutOT, skillOT, projectOT, contactOT } = offsets || initOffsets

    // Navigation handler

    const gotoHome = () => {
        setShow(!show)
        window.scrollTo(0, 0)
    }

    const gotoAbout = () => {
        setShow(!show)
        window.scrollTo(0, aboutOT)
    }

    const goToSkills = () => {
        setShow(!show)
        window.scrollTo(0, window.innerWidth > 700 ? skillOT - 100 : skillOT)
    }

    const goToProjects = () => {
        setShow(!show)
        window.scrollTo(0, window.innerWidth > 700 ? projectOT - 100 : projectOT)
    }

    const goToContact = () => {
        setShow(!show)
        window.scrollTo(0, contactOT)
    }

    // Go Back Function
    const goBack = () => {
        router.back()
    }

    const handleSaveResume = () => {
        saveResume(resume)
    }

    return (
        <nav className={showNavBg || !home ? styles.nav + ' ' + styles.bg : styles.nav}>
            {/* Nav Logo / Text */}
            {!home && <p onClick={goBack} className={styles.goBack}><i className="fa fa-chevron-left"></i></p>}
            <div className={styles.nav_logo}>
                <Link href="/">
                    <div className={styles.img}>
                        {logo ? (
                            <Image
                                src={`${process.env.NEXT_PUBLIC_URL}/uploads/${logo}`}
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
            {home && (
                <div className={styles.nav_menus}>
                    {/* nav icon */}
                    <p className={styles.nav_icon} onClick={() => setShow(!show)}><i className={show ? "fa fa-times" : "fa fa-bars"}></i></p>

                    {/* nav menu */}
                    <ul className={show ? styles.menu + " " + styles.show : styles.menu}>

                        {/* nav menu item */}
                        <li className={styles.nav_item}>
                            <p onClick={gotoHome}>Home</p>
                        </li>

                        {/* nav menu item */}
                        <li className={styles.nav_item}>
                            <p onClick={gotoAbout}>About</p>
                        </li>

                        {/* nav menu item */}
                        <li className={styles.nav_item}>
                            <p onClick={goToSkills}>Skills</p>
                        </li>

                        {/* nav menu item */}
                        <li className={styles.nav_item}>
                            <p onClick={handleSaveResume}>Resume</p>
                        </li>

                        {/* nav menu item */}
                        <li className={styles.nav_item}>
                            <p onClick={goToProjects}>Projects</p>
                        </li>

                        {/* nav menu item */}
                        <li className={styles.nav_item}>
                            <p onClick={goToContact}>Contact</p>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navigation