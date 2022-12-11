import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout/Layout'
import { MainPage } from './pages/MainPage/MainPage'

export const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}