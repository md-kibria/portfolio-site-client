import Link from 'next/link'
import styles from './Footer.module.scss'
import withSiteData from '../HOC'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'


const Footer = ({ siteData }) => {

    // Data from backend
    const { socialLinks, copyright, footerLogo } = siteData || {socialLinks: [], copyright: '', footerLogo: ''}

    // Error And Message State
    const [subsInfo, setSubsInfo] = useState({ msg: '', errors: {} })

    // Suybscribe Form
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async data => {
        try {
            // Add subscribe to server
            const res = await axios.post('subs/add', data)

            // If successfully subscribed, set the success msg
            setSubsInfo({
                msg: res.data.msg,
                errors: {}
            })
        } catch (err) {
            // If error occured, set the error msg
            setSubsInfo({
                msg: '',
                errors: err.response.data.errors
            })
        }
    }

    // Set copyright year
    let date = new Date()
    let currYear = date.getFullYear()

    return (
        <div className={styles.footer}>
            <img className={styles.footer_top_img} src="/img/Path 1.png" alt="path" />
            <div className={styles.footer_container}>
                <h3>Subscribe our news letter to get letest notifications from us</h3>
                <p>You can unsubscribe at any time</p>

                {subsInfo.msg && <h4 style={{ color: 'green', textAlign: 'center', margin: 0 }}>{subsInfo.msg}</h4>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your mail here..."
                        {...register('email', { required: true })}
                    />
                    <input type="submit" value="Subscribe" />

                </form>
                {errors.email && <p style={{ color: 'red', textAlign: 'center' }}>Email is required</p>}
                {subsInfo.errors.email && <p style={{ color: 'red', textAlign: 'center' }}>{subsInfo.errors.email.msg}</p>}

                <div className={styles.footer_navigation}>
                    {/* Footer Nav Item */}
                    <div className={styles.nav_item}>
                        <h4>About Me</h4>
                        <ul>
                            <li>
                                <Link href="/">About</Link>
                            </li>
                            <li>
                                <Link href="/">Resume</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Footer Nav Item */}
                    <div className={styles.nav_item}>
                        <h4>Contact Me</h4>
                        <ul>
                            <li>
                                <Link href="/">Contact</Link>
                            </li>
                            <li>
                                <Link href="/">Email</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Footer Nav Item */}
                    <div className={styles.nav_item}>
                        <h4>Socila Media</h4>
                        <ul>
                            {
                                socialLinks && socialLinks.map(sm => {
                                    /* Only Github And LinkedIn */
                                    if (sm.media == 'Github') {
                                        return (
                                            <li key={sm._id}>
                                                <Link href={sm.link}>{sm.media}</Link>
                                            </li>
                                        )
                                    } else if (sm.media == 'LinkedIn') {
                                        return (
                                            <li key={sm._id}>
                                                <Link href={sm.link}>{sm.media}</Link>
                                            </li>
                                        )
                                    }

                                    /* All Social Media */
                                    // return (
                                    //     <li key={sm._id}>
                                    //         <Link href={sm.link}>{sm.media}</Link>
                                    //     </li>
                                    // )
                                })
                            }
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom  */}
                <div className={styles.footer_bottom}>
                    {footerLogo ? (
                        <div className={styles.img}>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_URL}/uploads/${footerLogo}`}
                                height={20}
                                width={70}
                                alt="logo"
                            />
                        </div>
                    ) : (
                        <h1>Logo</h1>
                    )}
                    <p>&copy;{copyright + '2021-' + currYear}</p>
                    <div className={styles.icons}>
                        {
                            socialLinks && socialLinks.map(sm => {
                                if (sm.media == 'Github') {
                                    return <a key={sm._id} href={sm.link}><span><i className="fa fa-github-square"></i></span></a>
                                } else if (sm.media == 'LinkedIn') {
                                    return <a key={sm._id} href={sm.link}><span><i className="fa fa-linkedin-square"></i></span></a>
                                } else if (sm.media == 'Twitter') {
                                    return <a key={sm._id} href={sm.link}><span><i className="fa fa-twitter-square"></i></span></a>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withSiteData(Footer)