import React, { Fragment } from 'react'
import { UserForm } from '../components/UserForm/index'

import { Hero } from '../components/Hero'

const Signin = () => {
    return (
        <Fragment>
			<Hero />
			<UserForm/>
        </Fragment>

    )
}

export default Signin

