import React, {useState, useEffect, CSSProperties } from 'react';

import Loader from 'react-spinner-loader';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout/Layout'
import { MainPage } from './pages/MainPage/MainPage'
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { PortfolioPage } from "./pages/PortfolioPage/PortfolioPage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import ThemeProvider from "./providers/ThemeProvider";
import { NotFound } from "./components/NotFound/NotFound";

import SquareLoader from "react-spinners/SquareLoader";



export const App = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 1500)
    },[])

    const style_loader: React.CSSProperties = {
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
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<MainPage />}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/portfolio" element={<PortfolioPage/>}/>
                        <Route path="/contacts" element={<ContactsPage/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
      
        }
        
        </>
    )
}
