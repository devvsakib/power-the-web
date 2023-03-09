import React from 'react'
import { FaTrash } from 'react-icons/fa'

const ListItem = ({ items, listDelete, changeBool }) => {
    return (
        <div className="items flex justify-center mt-[30px] text-xl">

            <ul>
                {
                    items.length ? (
                        items.map((item) => (
                            <li className='items' key={item.id}>
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => changeBool(item.id)}
                                />

                                <label
                                    onDoubleClick={() => changeBool(item.id)}
                                    className={
                                        item.checked
                                            ?
                                            'text-green-400 ml-5' : " ml-5"
                                    }
                                >{item.item}</label>

                                <p className='inline-block pl-4' style={{ display: 'inline-block', color: 'orange' }}>
                                    <FaTrash
                                        role="button"
                                        onClick={() => listDelete(item.id)}
                                    />


                                </p>
                            </li>
                        ))) : "No List exits"

                }
            </ul>
        </div>
    )
}

export default ListItem