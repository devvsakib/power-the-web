import { useState, useEffect } from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Details = () => {
  const { capital } = useParams();
  const url = `https://restcountries.com/v3.1/capital/${capital}`
  const [borderCountry, setBorderCountry] = useState('');

  const [borderCountryDetails, setBorderCountryDetails] = useState([]);
  const [countryDetails, setCountryDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const borderUrl = `https://restcountries.com/v3.1/alpha/${borderCountry}`



  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCountryDetails(data);
        setIsLoading(false);
      })
  }, [isLoading])

  useEffect(() => {
    const fetchBorderCountry = () => {
      fetch(borderUrl)
        .then(res => res.json())
        .then(data => {
          setBorderCountryDetails(data)
        }
        )
    }
    fetchBorderCountry()
  }, [borderCountry])

  return (
    <div>
      <Link to="/">
        <button className='flex dark:bg-[#2b3945]  gap-2 items-center text-md rounded-lg   shadow-[0_0_10px_rgba(0,0,0,0.25)] px-10 py-3 ml-10'>
          <FaAngleLeft />
          <span> Back</span>
        </button>
      </Link>
      {
        isLoading ? <h1 className='text-3xl text-center'>Loading...</h1> :
          borderCountryDetails.length > 0 ?
            (
              borderCountryDetails?.map(({ region, languages, currencies, borders, population, tld, capital, name, flags, subregion }, idx) => (
                <div className='px-10 grid gap-20 grid-cols-1 lg:grid-cols-2 items-start mt-24 mb-20' key={idx}>
                  <div className='lg:pr-10'>
                    <img className='w-full h-auto' src={flags.png} alt={flags.alt} />
                  </div>
                  <div className='flex flex-col justify-between md:mt-20'>

                    <h1 className='font-extrabold text-2xl md:text-4xl'>{name.common}</h1>
                    <div className='text-lg flex flex-col md:flex-row gap-20 mt-10 opacity-80'>

                      <div className='flex flex-col gap-2'>
                        <p><span className='font-[600]'>Native Name: </span>{name.official}</p>
                        <p><span className='font-[600]'>Population: </span>{population}</p>
                        <p><span className='font-[600]'>Region: </span>{region}</p>
                        <p><span className='font-[600]'>Sub Region: </span>{subregion}</p>
                        <p><span className='font-[600]'>Capital: </span>{capital}</p>
                      </div>

                      <div className='flex flex-col gap-2'>
                        <p><span className='font-[600]'>Top Level Domain: </span> {tld}</p>
                        <p><span className='font-[600]'>Currencies: </span>
                          {
                            Object.values(currencies).map((cur, idx) => (
                              <span key={idx}><span className='font-[600]'>{cur.symbol}</span> {cur.name}</span>
                            ))
                          }
                        </p>
                        <p><span className='font-[600]'>Language: </span>
                          {
                            Object.values(languages).map((lan, idx) => (
                              <span key={idx}>{lan} </span>
                            ))
                          }
                        </p>
                      </div>
                    </div>

                    <div className='mt-20 flex items-center gap-5'>
                      <h1 className='font-[600] '>Border Countries:</h1>
                      <div className='flex gap-3 flex-wrap'>
                        {
                          borders === undefined ? <span className='opacity-50'>No border countries</span> : (
                            borders.map((border, idx) => (
                              <button className='dark:bg-[#2b3945]  shadow-sm shadow-black flex flex-col justify-between rounded-md px-10 py-1' key={idx}
                                onClick={() => { setBorderCountry(border) }}
                              >
                                <span>{border}</span>
                              </button>
                            )))
                        }
                      </div>
                    </div>
                  </div>
                </div>

              ))) : (

              isLoading ? <h1 className='text-3xl text-center'>Loading...</h1> :
                countryDetails?.map(({ region, languages, currencies, borders, population, tld, capital, name, flags, subregion }, idx) => (
                  <div className='px-10 grid gap-20 grid-cols-1 lg:grid-cols-2 items-start mt-24 mb-20' key={idx}>
                    <div className='lg:pr-10'>
                      <img className='w-full h-auto' src={flags.png} alt={flags.alt}  accessKey={flags.alt}/>
                    </div>
                    <div className='flex flex-col justify-between md:mt-20'>

                      <h1 className='font-extrabold text-2xl md:text-4xl'>{name.common}</h1>
                      <div className='text-lg flex flex-col md:flex-row gap-20 mt-10 opacity-80'>

                        <div className='flex flex-col gap-2'>
                          <p><span className='font-[600]'>Native Name: </span>{name.official}</p>
                          <p><span className='font-[600]'>Population: </span>{population}</p>
                          <p><span className='font-[600]'>Region: </span>{region}</p>
                          <p><span className='font-[600]'>Sub Region: </span>{subregion}</p>
                          <p><span className='font-[600]'>Capital: </span>{capital}</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                          <p><span className='font-[600]'>Top Level Domain: </span> {tld}</p>
                          <p><span className='font-[600]'>Currencies: </span>
                            {
                              Object.values(currencies).map((cur, idx) => (
                                <span key={idx}><span className='font-[600]'>{cur.symbol}</span> {cur.name}</span>
                              ))
                            }
                          </p>
                          <p><span className='font-[600]'>Language: </span>
                            {
                              Object.values(languages).map((lan, idx) => (
                                <span key={idx}>{lan} </span>
                              ))
                            }
                          </p>
                        </div>
                      </div>

                      <div className='mt-20 flex items-center gap-5'>
                        <h1 className='font-[600] '>Border Countries:</h1>
                        <div className='flex gap-3 flex-wrap'>
                          {
                            borders === undefined ? <span className='opacity-50'>No border countries</span> : (
                              borders.map((border, idx) => (
                                <button className='dark:bg-[#2b3945]  shadow-sm shadow-black flex flex-col justify-between rounded-md px-10 py-1' key={idx}
                                  onClick={() => { setBorderCountry(border) }}
                                >
                                  <span>{border}</span>
                                </button>
                              )
                              )
                            )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
                ))
      }
    </div>

  )
}
export default Details