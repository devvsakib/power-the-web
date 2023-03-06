import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../component/Card/Card'
import Search from '../component/Search/Search'

const Home = () => {
    const [country, setCountry] = useState([]);
    const [value, setValue] = useState('');
    const [region, setRegion] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const url = "https://restcountries.com/v3.1/all"
    useEffect(() => {
        axios.get(url)
            .then(data => {
                setCountry(data.data);
                setIsLoading(false);
            })
    }, [country.length])

    
    const filteredCountry = country.filter((country) => {
        return country.name.common.toLowerCase().includes(value.toLowerCase())
    })

    const onOptionChangeHandler = (e) => {
        setRegion(e.target.value)
    }

    const filteredRegion = filteredCountry.filter((country) => {
        return country.region.toLowerCase().includes(region.toLowerCase())
    })

    const showCountry = value ? filteredRegion : region ? filteredRegion : country;


    return (
        <section className='px-10'>
            <Search
                value={value}
                setValue={setValue}
                onOptionChangeHandler={onOptionChangeHandler}
                setRegion={setRegion}
            />

            <div className='grid grid-cols-1 md:grid-cols-4 gap-20'>
                {
                    isLoading ? <h1 className='text-3xl text-center w-[100vw]'>Loading...</h1> : (
                        showCountry?.map(({ region, population, capital, name, flags }, idx) => (
                                <Card
                                    region={region}
                                    population={population}
                                    capital={capital}
                                    name={name}
                                    flag={flags.png}
                                    alt={flags.alt}
                                    idx={idx}
                                />
                        )))
                }
            </div>
        </section >
    )
}

export default Home