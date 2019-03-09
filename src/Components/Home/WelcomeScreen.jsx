import React from 'react'
import {
    Hero, Heading, CallToAction, Subhead, Flex, ScrollDownIndicator
} from 'react-landing-page'
import Header from '../App/Header';
import Footer from '../Footer/Footer';

const WelcomeScreen = () => (
    <div className="welcome-screen">
        <Header />
        <Hero
            color='white'
            bg='black'
            bgOpacity={0.5}
        >
            <Heading>Welcome to my React App!</Heading>
            <Subhead fontSize={[2, 3]}>This is a showcase of my work</Subhead>
            <Flex mt={3}>
                <CallToAction bg='rgba(0, 0, 0, 0.54)' mr={3} href='/#/login'>Login</CallToAction>
                <CallToAction bg='orange'>Register</CallToAction>
            </Flex>
            <ScrollDownIndicator />
        </Hero>
        <Footer title="Made by Rajat Rai © 2019" />
    </div>
)

export default WelcomeScreen
