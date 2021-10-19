import { BrowserRouter as Router, Route } from 'react-router-dom'
import updateDetailScreen from './screens/updateDetailScreen'
import userDetailScreen from './screens/userDetailScreen'

const App = () => {
  return (
    <Router>
      <Route path='/update' component={updateDetailScreen} />
      <Route path='/details/:id' component={userDetailScreen} />
    </Router>
  )
}

export default App
