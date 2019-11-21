import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop'
import './App.css';
import HomePage from './pages/homepage/HomePage'
import Header from '../src/components/header/Header'
import SignInAndSignUp from './pages/sign-in-and-sign-out/SignInAndSignOut'
import { auth, createUserprofileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from '../src/redux/user/user.action'



class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){

    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
     async userAuth => {
       if(userAuth){
        const userRef = await createUserprofileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
             
              id: snapShot.id,
              ...snapShot.data()
            
          })
        })
        

       }
      
       setCurrentUser(userAuth)
      }
  
    )
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){

    return (
      <div>
          <Header/>
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={Shop} />
              <Route path='/signin' component={SignInAndSignUp} />
          </Switch>
      
      </div>
    )

  }
  ;
}

const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
