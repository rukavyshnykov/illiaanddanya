import { useEffect, useState } from 'react';
import { CategoryType, categoriesApi } from './api/categoriesApi';
import { CssBaseline } from '@mui/material';
import './App.css';

import { Header } from './widgets/Header/ui/Header';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routerSettings';

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
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
