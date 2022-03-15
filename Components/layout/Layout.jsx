import Footer from '../footer/Footer'
import Navigation from '../Navigation/Navigation'

const Layout = ({ home, children, offsets }) => {
    return (
        <>
            <Navigation home={home} offsets={offsets} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
