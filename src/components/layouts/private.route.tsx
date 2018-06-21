import * as React from "react";
import { Redirect, Route, RouteProps } from 'react-router';

import { AuthService } from '../../services/auth';
import { ActionMenu } from "../actionmenu";
import { Header } from '../header';
import './private.route.css';

interface State {
    user?: any;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export class PrivateRoute extends React.Component<RouteProps, State> {

    auth = new AuthService();

    constructor(props: any) {
        super(props);
        this.state = { isAuthenticated: false, isLoading: true };
    }

    componentDidMount() {
        this.auth.getAuthenticatedUser()
            .then(user => {
                this.setState({
                    user,
                    isAuthenticated: !!user,
                    isLoading: false
                });
            });
    }

    render() {
        const { isAuthenticated, isLoading, user } = this.state;
        if (isLoading) {
            return null;
        }
        if (!isAuthenticated) {
            let pathname = '/secure';
            if(this.props.location){
                // deep linking to secure pages
                pathname = this.props.location.pathname;
            }
            return <Redirect to={{ pathname: '/login', state: { from: pathname } }} />
        }

        const { component, ...rest } = this.props;

        // tslint:disable
        return (
            <div className="private">
                <Header title="Private"><ActionMenu user={this.state.user} /></Header>

                <div className="content">
                    <Route {...rest} render={props =>
                        React.createElement(component as any, { user, ...props })
                    } />
                </div>
            </div>
        );
    }
};
