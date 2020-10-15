import React, { Fragment } from 'react'
/* import { SignInForm } from '../components/SignInForm/index' */
import { SignUpForm } from '../components/SignUpForm/index'

import { Hero } from '../components/Hero'

const Signin = () => {
    return (
        <Fragment>
			<Hero />
			<SignUpForm/>
        </Fragment>

    )
}

export default Signin

