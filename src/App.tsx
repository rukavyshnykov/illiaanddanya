import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DataType, testApi } from './api/testApi';

const App = () => {

    const [data, setData] = useState<DataType[]>([])
    const [id, setId] = useState<string>('')
    const [id1, setId1] = useState<string>('')

    const getData = async () => {
        try {
            const res = await testApi.readAll()
            setData(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const postData = async () => {
        try {
            const res = await testApi.testPost()
            setData(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const deleteItem = async () => {
        try {
            const res = await testApi.deleteTest(Number(id))
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
                const res = await testApi.updateItem(Number(id1))
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
