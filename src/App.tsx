import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { ProductType, productsApi } from './api/productsApi';

const App = () => {

    const [data, setData] = useState<ProductType[]>([])
    const [id, setId] = useState<string>('')
    const [id1, setId1] = useState<string>('')

    const getData = async () => {
        try {
            const res = await productsApi.getProducts()
            setData(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const postData = async () => {
        try {
            const res = await productsApi.setProduct()
            setData(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const deleteItem = async () => {
        try {
            const res = await productsApi.deleteProduct(Number(id))
            setData(res.data)
        }
        catch(e) {
            console.log(e)
        }
        
    }

    const updateItem = async () => {
        try {
            const item = data.find(el => el.id === Number(id1))
            if(item) {
                const res = await productsApi.updateProduct(Number(id1))
                setData(res.data)
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    const changeId = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }

    const changeId1 = (e: ChangeEvent<HTMLInputElement>) => {
        setId1(e.target.value)
    }

    

    useEffect(() => {
        // postData() 
        getData()
    }, [])



    return (
        <div className="App">
            <input value={id} onChange={changeId}/>
            <button onClick={deleteItem}>DELETE</button>
            <input value={id1} onChange={changeId1}/>
            <button onClick={updateItem}>UPDATE</button>
            <ul>
                {data.map(el => <li key={el.id}>{el.id}{el.name}</li>)}
            </ul>

        </div>
    );
}

export default App;
