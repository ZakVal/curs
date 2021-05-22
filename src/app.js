import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from './Header';


const goodList = [{
    name: 'Кроссовки 1',
    price: 10000,
    brand: 'Adidas'
    },
{
    name: 'Кроссовки 2',
    price: 4000,
    brand: 'Adidas'
    },
{
    name: 'Кроссовки 3',
    price: 8000,
    brand: 'Nike'
    },
{
    name: 'Кроссовки 4',
    price: 3500,
    brand: 'Puma'
    },
{
    name: 'Кроссовки 5',
    price: 9000,
    brand: 'Reebok'
    },
{
    name: 'Кроссовки 6',
    price: 6000,
    brand: 'Nike'
}]

function App() {
    const [inputValue, setInputValue]= useState('')
    const [goodItems, setGoodItems] = useState([]);





    const onSearchItems = (e) => {
        const {value} = e.target;
        setInputValue(value);

        const newItem = goodList.filter(({name}) => {
            return name.toLowerCase().includes(value.toLowerCase())
        })
    }


v

    useEffect(() => {
        setGoodItems(goodList);

    },[])

    return (
                <div className="App">
                    <Header
                        inputValue={inputValue}
                        onSearchItems={onSearchItems}
                    />
                    <main className="main-wrapper">
                        {
                            goodItems.map((item) => (
                                <div className="items">
                                    <p>{item.name}</p>
                                    <p>{item.brand}</p>
                                    <p>{item.price}</p>
                                </div>
                            ))
                        }
                    </main>
                </div>
    );
}

export default App;