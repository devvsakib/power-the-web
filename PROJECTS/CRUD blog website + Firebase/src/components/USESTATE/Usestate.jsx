import React, { useState } from 'react'
import apiRequest from '../../API/apiRequest'
import ListItem from '../Card/ListItem'
import Additem from './Additem'
import './style.css'

const styles = { color: 'orange', margin: '0px 10px', fontWeight: 'bold' }

const Usestate = ({ items, setItems, handleSubmit, newitem, setNewitem, setFetchError, API_URL }) => {
    const [name, setName] = useState("ClickToVerify")
    function nameChange(e) {
        setName(e.target.className)
    }
    const changeBool = async (id) => {
        const list = items.map(
            e => e.id === id ?
                { ...e, checked: !e.checked }
                :
                e
        )
        setItems(list)


        const myItem = list.filter(item => item.id === id)
        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ checked: myItem[0].checked })
        }
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl, updateOptions)
        if (result) setFetchError(result)

    }
    const listDelete = async (id) => {
        const list = items.filter(e => e.id !== id);
        setItems(list)

        const deleteOptions = {
            method: 'DELETE'
        }
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl, deleteOptions)
        if (result) setFetchError(result)
    }

    const refreshPage = () => {
        window.location.reload(true)
    }
    return (
        <main className='text-center'>
            {/* <div className="container m-auto mt-[20px]  flex-col text-center justify-center text-center">
                <p>You clicked <span style={styles}>{name}</span> this button</p>
                <button onClick={nameChange} className="btn1">
                    Button One
                </button>
                <button onClick={nameChange} className="btn2 border-4  py-2 my-5 border-red-200 w-40 m-auto">
                    Button Two
                </button>
                <button onClick={nameChange} className="btn3">
                    Button Three
                </button>
            </div> */}

            <Additem
                handleSubmit={handleSubmit}
                newitem={newitem}
                setNewitem={setNewitem}
            />

            <ListItem
                items={items}
                changeBool={changeBool}
                listDelete={listDelete}
            />
            <button className='mt-10 bg-slate-400 p-2 px-4 rounded-md text-black font-bold' onClick={refreshPage}>Reload Page</button>
        </main>
    )
}

export default Usestate