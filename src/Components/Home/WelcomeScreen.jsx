import React from 'react'
import {
    Hero, Heading, CallToAction, Subhead, Flex, ScrollDownIndicator
} from 'react-landing-page'
import Header from '../App/Header';

const WelcomeScreen = () => (
    <div className="app">
        <Header />
        <div className="welcome-screen">
            <h1>Welcome to the Tornadoes Website!</h1><Hero
                color='white'
                // backgroundImage={require('./../../images/landing-page.jpg')}
                bg='black'
                bgOpacity={0.5}
            >
                <Heading>Hero with a background image</Heading>
                <Subhead fontSize={[2, 3]}>background image & secondary action</Subhead>
                <Flex mt={3}>
                    <CallToAction bg='grey' mr={3}>Secondary Action</CallToAction>
                    <CallToAction>Primary Action</CallToAction>
                </Flex>
                <ScrollDownIndicator />
            </Hero>

        </div>
    </div>
)

export default WelcomeScreen
