import { Link } from 'react-router-dom'
const Card = ({ name, flag, alt, population, region, capital, idx }) => {
    return (
        <div key={idx} className="dark:bg-[#2b3945]  shadow-lg flex flex-col justify-between rounded-md overflow-hidden">
            <img className='h-full w-full  object-cover' src={flag} alt={alt} aria-label={alt}
            accessKey={alt}
            />
            <Link to={`${capital}`}>
                <div className='p-5'>
                    <h2 className='text-xl  font-bold mb-2'>{name.common}</h2>
                    <p><b>Population: </b>{population}</p>
                    <p><b>Region: </b>{region}</p>
                    <p><b>Capital: </b>{capital}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card