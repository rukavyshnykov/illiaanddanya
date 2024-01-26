import { Box, Grid } from "@mui/material"
import { ProductType } from "../../api/productsApi"
import { ProductCard } from "../../entities/ProductCard/ProductCard"

type ProductsList = {
    products: ProductType[]
}

export const ProductsList = ({ products }: ProductsList) => {


    return (
        <Grid container spacing={2} sx={{marginTop: 'unset', width: '100%', marginLeft: 'unset'}}>
        {
            products.map(({ name, imgHref, id }: ProductType) => {
                return (
                    <ProductCard key={id} name={name} imgHref={imgHref} />
                )
            })
        }
        </Grid>
    )
}