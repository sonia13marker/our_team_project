import { Header } from '../Header/Header'
// import { Footer } from '../Footer/Footer'

export const Layout = (props) => {
    return <div>
        <Header />
        <main>
            { props.children }
        </main>
        {/*на MainPage не должно быть футера*/}
        {/* <Footer /> */}
    </div>
}