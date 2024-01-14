import axios from "axios";

const instance = axios.create({
    baseURL: 'https://aed6-188-163-100-229.ngrok-free.app/api/',
    headers: {
        'ngrok-skip-browser-warning': true,
        withCredentials: true
    }
})

export const testApi = {
    readAll: () => {
        return instance.get<DataType[]>('readAllProducts')
    },
    testPost: () => {
        return instance.post<DataType[]>('createProduct', { name: 'CHECK', amount: 5 })
    },
    deleteTest: (id: number) => {
        return instance.delete<DataType[]>(`deleteById/${id}`)
    },
    updateItem: (id: number) => {
        return instance.put<DataType[]>(`updateProduct/${id}`, { id, name: 'KUASDFSDF', amount: 123 })
    }
}

export type DataType = {
    id: number,
    name: string,
    amount: number
}