import React from 'react';
import { ContainerI, Left, Title, Description, Info, ButtonL, Contact, Phone, Right } from './StyledIntro';
import NewsSlider from '../NewsSlider';

const Intro = () => {
    return (

            <ContainerI>
                <Left>
                    <Title>Free Consulting</Title>
                    <Description>
                        Welcome to our consulting agency website! We are a team of experienced and dedicated consultants who specialize in providing expert advice and solutions for businesses of all sizes. Our services cover a wide range of areas, including strategy development, organizational design, process improvement, marketing and sales, and technology implementation.
                    </Description>
                    <Info>
                        <ButtonL variant='contained' sx={{padding:'13px',borderRadius:"15px" ,fontWeight:'bold'}}>
                            START A PROJECT
                        </ButtonL>
                        <Contact>
                            <Phone> Call Us +212 65987452</Phone>
                         
                        </Contact>

                    </Info>
                </Left>
                <Right>
                    <NewsSlider />

                </Right>
            </ContainerI>
    )
}

export default Intro
