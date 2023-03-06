import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({ value, setValue, onOptionChangeHandler }) => {
    const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    return (
        <div className='flex flex-col md:flex-row gap-4 justify-between my-10'>
            <div className='shadow-md px-8 rounded-lg flex gap-5 items-center  dark:bg-[#2b3945]'>
                <span className='text-black/40 dark:text-white/60'><FaSearch /></span>
                <input type="text" className='py-4 placeholder:text-[#858585] dark:bg-[#2b3945] text-[#111517] dark:text-white/60 md:pr-32 outline-none dark:placeholder:text-white/70' placeholder='Search for a country...'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
            <div className='bg-white dark:bg-[#2b3945] w-2/3 md:w-auto rounded-lg shadow-md py-4 px-6'>
                <select
                    className='bg-white dark:bg-[#2b3945] dark:text-white/90 text-[#111517] cursor-pointer'
                    onChange={onOptionChangeHandler}>
                    <option className='font-semibold text-sm' value="">Filter By Region</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default Search