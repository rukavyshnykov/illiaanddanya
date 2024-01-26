import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { ProductType, productsApi } from "../../api/productsApi"
import { ProductsList } from "../../widgets/ProductsList/ProductsList"
import { Container, Typography } from "@mui/material"

export const Category = () => {
    const location = useLocation()
    const { cat } = useParams()

    const [test, setTest] = useState<ProductType[]>([])

    const getItems = async () => {
        const res = await productsApi.getItems(cat)
        setTest(res.data)
    }

    useEffect(() => {
        getItems()
    }, [location])

    return (
        <>
            <Container maxWidth={"xl"}>
                <Typography variant="h4" sx={{margin: '20px 0'}}>Category: {cat}</Typography>
                <ProductsList products={test} />
            </Container>
        </>
    )
}