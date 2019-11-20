import React from 'react'
import FormInput from '../form-in/form-in'
import CustomButton from '../custom-button/CustomButton'
import './SignIn.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account </h2>
            <span> Sign in with your email and password </span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    onChange={this.handleChange}
                    value={this.state.email}
                    label='email' 
                    required
                    />

                <FormInput 
                    name="password" 
                    type="password"
                    onChange={this.handleChange} 
                    value={this.state.password}
                    label='password'
                    required
                    
                />
                <div className='buttons'>
                    <CustomButton type="submit">
                        Sign In 
                    </CustomButton>

                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn >
                
                        Sign In with Google 
                    </CustomButton>
                
                </div>

                
            
            </form>
            
            </div>
        )
    }
}

export default SignIn