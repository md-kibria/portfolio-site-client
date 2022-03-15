import withSiteData from '../HOC'
import styles from './About.module.scss'

const About = ({siteData}) => {
    
    return (
        <div className={styles.about}>
            <h2 className={styles.title}>About <span>Me</span></h2>

            <div className={styles.text}>
                <p>{siteData.aboutText || 'Working on it!'}</p>
            </div>
        </div>
    )
}

export default withSiteData(About)
