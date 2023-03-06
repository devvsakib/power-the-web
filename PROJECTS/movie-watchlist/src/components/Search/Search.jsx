import { useState } from 'react'
const Search = ({ searchValue, setSearchValue, searchDrama }) => {
    const [count, setCount] = useState(0);
    return (
        <div className="form-control mb-10">
            <div className='mx-auto'>
                <div className='mb-5'>
                    <h2 className='text-xl font-bold font-mono badge-primary rounded py-1'>KDRAMA Watch <span className='indicator btn' onClick={() => setCount(count + 1)}>
                        List
                        <span className="indicator-item badge badge-secondary">{count > 20 ? count + "+" : count}</span>
                    </span>
                    </h2>
                </div>
                <div className="input-group w-auto">
                    <input type="text" placeholder="Search Movie…" className="input input-bordered"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)} />
                    <button className="btn btn-square" onClick={searchDrama}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search