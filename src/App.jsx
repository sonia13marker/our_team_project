import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout/Layout'
import { MainPage } from './pages/MainPage/MainPage'
import {AboutPage} from "./pages/AboutPage/AboutPage";

export const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}