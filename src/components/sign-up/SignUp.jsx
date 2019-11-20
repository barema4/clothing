import React from 'react'
import FormInput from '../form-in/form-in'

import CustomButton from '../custom-button/CustomButton'

import { auth, createUserprofileDocument } from '../../firebase/firebase.utils'

import './SignUp.scss'

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {

            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {

        event.preventDefault();
        
        const { displayName, email, password, confirmPassword } = this.state
        
        if(password !== confirmPassword){
            alert("password don't  match")
            return
        }
        try{

            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserprofileDocument(user, { displayName })

            this.setState({

            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''

            })

        }
        catch(error){

            console.error(error);
          

        }
    }

    handleChangle = (event) => {

        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have  a account</h2>
                <span>Sign up with your email and password </span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChangle}
                        label='Display Name'
                        required
                    
                    />
                  

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChangle}
                        label='Email'
                        required
                    
                    />
                  

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChangle}
                        label='Password'
                        required
                    
                    />
                   
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChangle}
                        label='ConfirmPassword'
                        required
                    
                    />

                    <CustomButton type='submit'> SIGN UP</CustomButton>
                 
                </form>
            </div>
        )
    }
}

export default SignUp