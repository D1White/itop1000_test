import { Switch, Route } from 'react-router-dom'
import { Login, Register, PrivateRoute, Main, AdminRoute, Dashboard, Users, User } from './pages'

function App() {
  return (
    <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Register} />
        <AdminRoute exact path='/dashboard' component={Dashboard} />
        <AdminRoute exact path='/users' component={Users} />
        <AdminRoute path='/user/:id' component={User} />
        <PrivateRoute exact path='/' component={Main} />
    </Switch>
  );
}

export default App;
