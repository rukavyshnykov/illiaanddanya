import { Box, Grid, Paper, Typography } from "@mui/material"
import { ProductType } from "../../api/productsApi"

type ProductCard = Partial<ProductType>

export const ProductCard = ({name, imgHref}: ProductCard) => {

    return (
        <Grid xs={3}>
            <Paper elevation={3} sx={{padding: '10px 20px'}}>
                <Box component={'img'} src={imgHref} sx={{height: '100px', width: '100px', margin: '20px 0', objectFit: 'cover'}}/>
                <Typography variant="body1">{name}</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptatem sint qui corporis dolorum libero nostrum, quod officiis necessitatibus nesciunt. Alias debitis adipisci minus nulla! Nam modi quidem incidunt dolores!</Typography>
            </Paper>
        </Grid>
    )
}