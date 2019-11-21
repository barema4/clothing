import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'
import './SignInOut.scss'

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-out'>
        <SignIn/>
        <SignUp/>
    </div>
)
export default SignInAndSignUp