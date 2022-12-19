import React, {useState, useEffect} from 'react';

import Loader from 'react-spinner-loader';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout/Layout'
import { MainPage } from './pages/MainPage/MainPage'
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { PortfolioPage } from "./pages/PortfolioPage/PortfolioPage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import ThemeProvider from "./providers/ThemeProvider";
import { NotFound } from "./components/NotFound/NotFound";


export const App = () => {
    const [loader, setLoader] = useState(true);
    
    // const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1000)
    })
    return (
        <>
        {loader==true? 
                <Loader show = {loader} type = "body"></Loader>:
                <Loader  type = {<MainPage/>}></Loader>
        }
        <ThemeProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<MainPage />}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/portfolio" element={<PortfolioPage/>}/>
                        <Route path="/contacts" element={<ContactsPage/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
        </>
    )
}
