import axios from "axios";
import { CategoryType } from "./categoriesApi";

const instance = axios.create({
    baseURL: 'https://toad-merry-badly.ngrok-free.app/api/products/',
    headers: {
        'ngrok-skip-browser-warning': true,
        withCredentials: true
    }
})

export const productsApi = {
    getProducts: () => {
        return instance.get<ProductType[]>('readAllProducts')
    },
    setProduct: () => {
        return instance.post<ProductType[]>('createProduct', { name: 'CHECK', amount: 5 })
    },
    deleteProduct: (id: number) => {
        return instance.delete<ProductType[]>(`deleteById/${id}`)
    },
    updateProduct: (id: number) => {
        return instance.put<ProductType[]>(`updateProduct/${id}`, { id, name: 'KUASDFSDF', amount: 123 })
    },
    getItems: (name: string | undefined) => {
        return instance.get<ProductType[]>(`category/${name}`)
    }
}

export type ProductType = {
    id: number,
    name: string,
    amount: number,
    imgHref?: string,
    category: CategoryType
}