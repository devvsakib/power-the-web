import React, { useState } from 'react'
import "./shoppingList.css"
export default function ShoppingList() {

    const [list, setList] = useState([])
    const [item, setItem] = useState("")

    //to generate unique keys
    // let keys = [0];
    // function keyproducer() {

    //     for (let i = 0; i < keys.length; i++) {
    //         let key = Math.floor(Math.random() * 101);
    //         if (!keys.includes(key)) {
    //             keys.push(key);
    //             return key;
    //         }
    //     }

    // }

    function handleItemName(e) {
        setItem(e.target.value)

    }

    function handleItemAdd(e) {
        e.preventDefault()
        if (item) {


            setList([...list, item])
            setItem("")
        }




    }
    function handleDeleteItem(itemName) {



        let filteredList = list.filter(k => k !== itemName)
        setList(filteredList);

    }

    return (
        <div className='container4'>
            <h1>Project 4: Shopping List</h1>
            <div
                className='listPanel'>
                <form className='add' onSubmit={handleItemAdd}>
                    <input className='typeShoppingItem' type="text" placeholder='Add Item' value={item} name='itemName' onChange={(e) => handleItemName(e)} />
                    <button className='addShoppingItem' >Add</button>
                </form>
                <div className="itemsList">
                    {list.map((item, index) => {
                        return (
                            <Item key={item + index + Math.random() * 100} itemName={item} onDelete={handleDeleteItem} />
                        )

                    })}
                </div>

            </div>


        </div>
    )
}


function Item({ itemName, onDelete }) {
    return (
        <div className='shoppingItem'>
            <p>{itemName}</p>
            <button className='deleteItem' onClick={() => onDelete(itemName)}>❌</button>
        </div>
    )
}