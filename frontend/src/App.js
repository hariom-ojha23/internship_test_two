import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AllUserDetailScreen from './screens/AllUserDetailScreen'
import ImageScreen from './screens/ImageScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import UpdateDetailScreen from './screens/UpdateDetailScreen'
import UserDetailScreen from './screens/UserDetailScreen'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route exact path='/' component={AllUserDetailScreen} />
      <Route path='/update/:id' component={UpdateDetailScreen} />
      <Route path='/details/:id' component={UserDetailScreen} />
      <Route path='/image/:id' component={ImageScreen} />
    </Router>
  )
}

export default App
