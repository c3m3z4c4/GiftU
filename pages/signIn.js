import React, { Fragment } from 'react'
import { UserForm } from '../components/UserForm/index'
import { Header, Hero, FormPlace, StyledText, NormalText } from '../styles/SignIn'



const Signin = () => {
    return (
        <Fragment>
            <Header>
                <img src="/images/GiftÜ.png"/>
            </Header>
            <Hero>
               <div>
                    <NormalText>Tu eliges</NormalText> <StyledText>a quien,</StyledText> <NormalText>nosotros encontramos</NormalText> <StyledText>el regalo perfecto</StyledText>
                </div>
                
            </Hero>
            <FormPlace> 
                <UserForm />
            </FormPlace>
        </Fragment>

    )
}

export default Signin

