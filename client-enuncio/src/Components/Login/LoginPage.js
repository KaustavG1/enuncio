import Login from './Login';
import Signup from './Signup';
import { Switch, Route } from 'react-router-dom';

function LoginPage(props) {
    return (<Switch>
        <Route exact path='/'>
            <Login />
        </Route>
        <Route exact path='/Signup'>
            <Signup />
        </Route>
    </Switch>);
}

export default LoginPage;