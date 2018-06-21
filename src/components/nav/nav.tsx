// import { Auth } from 'aws-amplify';
import * as React from "react";
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import './nav.css';

interface Props extends RouteComponentProps<{}> {
    user?: any;
}

// Example of how to use Auth in a component OUTSIDE of an AuthRoute
class NavComponent extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    onLogoutClicked(e: any) {
        e.preventDefault();
    }

    render() {
        const isAuthenticated = !!this.props.user;

        return (
            <ul className="nav">
                <li className="nav-link">
                    <Link to="/" className="flat-button flat-button-secondary">Home</Link>
                </li>
                {isAuthenticated ? (
                    <>
                        <li className="nav-link">
                            <a className="flat-button flat-button-danger" onClick={this.onLogoutClicked}>Logout</a>
                        </li>
                        <li className="nav-link">
                            <Link to={{ pathname: '/secure' }} className="flat-button flat-button-danger">Logout</Link>
                        </li>
                    </>
                ) : (
                        <li className="nav-link">
                            <Link to={{ pathname: '/login', state: { from: '/' } }} className="flat-button flat-button-secondary">Login</Link>
                        </li>
                    )}
            </ul>
        );
    }
}

export const Nav = withRouter<Props>(NavComponent);