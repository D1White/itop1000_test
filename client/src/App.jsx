import { Switch, Route } from 'react-router-dom'
import { Login, Register, PrivateRoute, Main, AdminRoute, Dashboard } from './pages'

function App() {
  return (
    <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/' component={Main} />
        <AdminRoute exact path='/dashboard' component={Dashboard} />
    </Switch>
  );
}

export default App;
