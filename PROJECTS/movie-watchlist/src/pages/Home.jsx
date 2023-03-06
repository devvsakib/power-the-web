import { useState, useEffect } from 'react'
import MovieCard from '../components/Card/MovieCard'
import Search from '../components/Search/Search'

const Home = () => {
    const [dramas, setDramas] = useState([])
    const [loading, setLoading] = useState(true)
    const [addDrama, setAddDrama] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const apiUrl = `https://mydramalist-scrape-api.vercel.app/search/q/${searchValue}`

    const searchDrama = () => {
        console.log(searchValue);
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setDramas(data.results.dramas)
            })
            setDramas([])
    }

    const jsn = JSON.parse(localStorage.getItem('drama'))
    console.log(jsn);

    useEffect(() => {
        searchDrama()
    }, [searchValue])

// i want to add a button to add the drama to the watchlist. I have a add button in moviecard component. I want to add movie in a array and store it to localstorage. Write the code please
const addDramas = () => {
    setAddDrama([...addDrama, dramas])
    localStorage.setItem('drama', JSON.stringify(addDrama))
    
}



    return (
        <div className=''>
            <Search
                value={searchValue}
                setSearchValue={setSearchValue}
                searchDrama={searchDrama}
            />
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    dramas.map((drama, idx) => (
                        drama.title !== undefined ?
                            <MovieCard
                                drama={drama}
                                key={idx}
                                setDramas={setDramas}
                                addDrama={addDramas}
                            /> : "No Drama"
                    ))
                }
            </div>
        </div>
    )
}

export default Home