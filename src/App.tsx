import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { ProductType, productsApi } from './api/productsApi';
import { CategoryType, categoriesApi } from './api/categoriesApi';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { router } from './app/routerSettings';
import { Container, CssBaseline } from '@mui/material';
import Header from './widgets/Header/Header';

const App = () => {
    const [sec, setSec] = useState<CategoryType[]>([])

    const getSections = async () => {
        try {
            const res = await categoriesApi.getCategories()
            setSec(res.data)
        }
        catch(e) {}
    }
    
    useEffect(() => {
        getSections()
    }, [])



    return (
        <div className="App">
            <CssBaseline />
            <Container maxWidth={'xl'}>
                <Header sections={sec} />
                <RouterProvider router={router} />
            </Container>
        </div>
    );
}

export default App;
