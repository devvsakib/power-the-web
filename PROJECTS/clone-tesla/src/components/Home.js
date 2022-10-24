import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { positions } from '@mui/system'

function Home() {
    return (
            
        <Container>
            
            <Section
                title="Cybertruck"
                description="BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR"
                bgimg="cybertruck.jpg"
                leftBtn="Custom Order"
            />
            <Section
                title="Model 3"
                description="Order Online for touchless delivery"
                bgimg="model-3.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Section
                title="Model S"
                description="Order Online for touchless delivery"
                bgimg="model-s.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for touchless delivery"
                bgimg="model-x.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />

            <Section
                title="Model Y"
                description="Order Online for touchless delivery"
                bgimg="model-y.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-Back gaurantee"
                bgimg="solar-panel.jpg"
                leftBtn="Order NOW"
                rightBtn="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Money-Back gaurantee"
                bgimg="solar-roof.jpg"
                leftBtn="Order NOW"
                rightBtn="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                bgimg="accessories.jpg"
                leftBtn="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`