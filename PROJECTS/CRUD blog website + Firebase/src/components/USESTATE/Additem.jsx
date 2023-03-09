import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

const Additem = ({ newitem, setNewitem, handleSubmit }) => {
    const inputRef = useRef()
    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="additem" className="mr-2 text-xl">Additem</label>
            <input type="text"
                autoFocus
                ref={inputRef}
                placeholder='Add items'
                id='additem'
                required
                value={newitem}
                onChange={(e) => setNewitem(e.target.value)}
                className="text-black font-bold p-2 px-4 mr-4 rounded-md"
            />
            <button
                onClick={() => inputRef.current.focus()}
                type='submit'
                aria-label="Add Item"
                className="bg-gray-500 p-4 rounded-full">
                <FaPlus />
            </button>
        </form>
    )
}

export default Additem