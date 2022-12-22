import React, {useEffect, useState} from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from './components/Layout/Layout'
import {MainPage} from './pages/MainPage/MainPage'
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {PortfolioPage} from "./pages/PortfolioPage/PortfolioPage";
import {ContactsPage} from "./pages/ContactsPage/ContactsPage";
import ThemeProvider from "./providers/ThemeProvider";
import {NotFound} from "./components/NotFound/NotFound";
import {RulesPage} from "./pages/RulesPage/RulesPage";

import SquareLoader from "react-spinners/SquareLoader";


export const App = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    const style_loader = {
        display: "block",
        margin: "300px auto",
    };

    return (
        <>
            {
                loading ? <SquareLoader
                        color="#5A5A5A"
                        loading={loading}
                        size={50}
                        cssOverride={style_loader}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    :
                    <ThemeProvider>
                        <BrowserRouter>
                            <Layout>
                                <Routes>
                                    <Route path="/" element={<MainPage/>}/>
                                    <Route path="/about" element={<AboutPage/>}/>
                                    <Route path="/portfolio" element={<PortfolioPage/>}/>
                                    <Route path="/contacts" element={<ContactsPage/>}/>
                                    <Route path="/rules" element={<RulesPage/>}/>
                                    <Route path="*" element={<NotFound/>}/>
                                </Routes>
                            </Layout>
                        </BrowserRouter>
                    </ThemeProvider>
            }
        </>
    )
}
