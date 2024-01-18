import { useParams } from "react-router-dom"

export const Category = () => {
    const { cat } = useParams()
    
    return (
        <>
            {cat}
        </>
    )
}