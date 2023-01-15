import { data } from 'autoprefixer'
import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../../data/carList'


const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
    const [rideDuration, setRideDuration] = useState(0)


// Getting Ride duration from Mapbox API
    useEffect(() => {
        rideDuration = fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZGlhbW9uZGF5byIsImEiOiJja3ZucDQ5dGk3bm1nMzFxd3F3eWkycTZ3In0._fWUYJdKFxCNA9Db9vhieA`
        )
            .then(res => res.json())
            .then(data => {
                setRideDuration(data.routes[0].duration / 100)
            })
    }, [pickupCoordinates,dropoffCoordinates])
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>

            <CarList>
                {carList.map((car, index) => (
                    <Car key ={index}>
                        <CarImage src={car.imgUrl} />
                    
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5min away</Time>
                        </CarDetails>
                        <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))}
            </CarList>

        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-2
`

const CarList = tw.div`
    overflow-y-scroll
`

const Car = tw.div`
 flex p-4 items-center
`

const CarImage = tw.img`
    h-14 mr-4
`

const CarDetails = tw.div`
    flex-1
`

const Service = tw.div`
    font-medium
`

const Time = tw.div`
    text-xs text-blue-500
`

const Price = tw.div`
    text-sm
`