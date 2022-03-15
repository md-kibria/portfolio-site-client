import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import styles from './404.module.scss'

const notFound = () => {

    // Route
    const route = useRouter()

    return (
        <div className={styles.container}>
            <Head>
                <title>404 - Not Found</title>
            </Head>
            <div className={styles.header}>
                <h1>404</h1>
                <div className={styles.text}>
                    <p>This page could not be found.</p>
                    <b onClick={() => route.back()}>&larr; Go back</b>
                </div>
            </div>

        </div>
    )
}

export default notFound
