import React from 'react';
import { ContainerI, Left, Title, Description, Info, ButtonL, Contact, Phone, Right } from './StyledIntro';
import NewsSlider from '../NewsSlider';

const Intro = ({dark}) => {
    return (

            <ContainerI dark={dark}>
                <Left>
                    <Title>We providing Free Consulting and other services</Title>
                    <Description>
                    Training Edge Consulting is a top-notch provider of professional training and consulting services for businesses. Our team of experienced professionals works closely with clients to develop customized training programs tailored to their specific needs.
                    </Description>
                    <Info>
                        <ButtonL dark={dark}  variant='outlined' >
                            START A PROJECT
                        </ButtonL >
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
