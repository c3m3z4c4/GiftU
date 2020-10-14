import React, { Fragment } from 'react'
import { UserForm } from '../components/UserForm/index'
import { FormPlace } from '../styles/SignIn'
import { Hero } from '../components/Hero'

const Signin = () => {
    return (
        <Fragment>
			<Hero />
            <FormPlace> 
                <UserForm/>
            </FormPlace>
        </Fragment>

    )
}

export default Signin

