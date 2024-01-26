import { useEffect, useState } from "react"
import { Header } from "../../widgets/Header/ui/Header"
import { CategoryType, categoriesApi } from "../../api/categoriesApi"
import { Outlet } from "react-router-dom"

export const Layout = () => {
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
        <>
            <Header sections={sec}/>
            <Outlet />
        </>
    )
}