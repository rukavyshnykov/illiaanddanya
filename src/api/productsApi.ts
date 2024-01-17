import axios from "axios";

const instance = axios.create({
    baseURL: 'https://lion-neat-immensely.ngrok-free.app/api/products/',
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
    }
}

export type ProductType = {
    id: number,
    name: string,
    amount: number
}