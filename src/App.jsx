import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout/Layout'
import { MainPage } from './pages/MainPage/MainPage'
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { PortfolioPage } from "./pages/PortfolioPage/PortfolioPage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";

export const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/portfolio" element={<PortfolioPage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}