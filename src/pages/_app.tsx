import './global.css'

const Layout = ({ Component, pageProps }) => {
    return (
        <main className="p-10 xl:p-20">
            <Component {...pageProps} />
        </main>
    )
}

export default Layout
