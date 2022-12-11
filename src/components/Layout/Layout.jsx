import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const Layout = (props) => {
    return <div>
        <header>
            <Header />
        </header>
        <main>
            { props.children }
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
}