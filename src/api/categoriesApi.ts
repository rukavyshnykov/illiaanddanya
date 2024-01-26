import axios from "axios";

const instance = axios.create({
    baseURL: 'https://toad-merry-badly.ngrok-free.app/api/categories/',
    headers: {
        'ngrok-skip-browser-warning': true,
        withCredentials: true
    }
})

export const categoriesApi = {
    getCategories: () => {
        return instance.get<CategoryType[]>('readAllCategories')
    },
    setCategory: (name: string) => {
        return instance.post<CategoryType[]>('createCategory', { name })
    },
    deleteCategory: (id: number) => {
        return instance.delete<CategoryType[]>(`deleteCategory/${id}`)
    }
}

export type CategoryType = {
    id: number,
    name: string,
}