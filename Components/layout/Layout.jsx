import Footer from '../footer/Footer'
import Navigation from '../Navigation/Navigation'
import styles from './Layout.module.scss'

const Layout = ({home, children}) => {
    return (
        <div className={styles.layout}>
            <Navigation home={home} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
