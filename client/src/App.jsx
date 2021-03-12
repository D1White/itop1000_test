import { Switch, Route } from 'react-router-dom'
import { Login, Register, PrivateRoute, Main } from './pages'

function App() {
  return (
    <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/' component={Main} />
    </Switch>
  );
}

export default App;
