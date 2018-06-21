import Amplify from 'aws-amplify';
import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './assets/styles/index.css';
import { PrivateRoute, PublicRoute } from './components';
import { Home, Login, Secure } from './routes';

import { config } from './config';

Amplify.configure(config.AWS);

/*

- forgot password
- change password
- requires new password (expire, new user)
- register new user (master acct only)

*/

class App extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <div>
                        <Switch>
                            <PublicRoute exact={true} path="/" component={Home} />
                            <PublicRoute path="/login" component={Login} />
                            <PrivateRoute path="/secure" component={Secure} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
