import * as React from "react";
import { RouterProps } from "react-router";

import { AuthService } from "../../services/auth";

interface Props extends RouterProps {
    user?: any;
}

export class Secure extends React.Component<Props> {

    auth = new AuthService();

    constructor(props: any) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e: any){
        e.preventDefault();

        this.auth.logout().then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        const { user } = this.props;

        return (

            <div className="secure-page">
                <p>Welcome {user.username}</p>
                <p>This is a secure page. Thanks for logging in.</p>
                <a onClick={this.handleLogout} className="flat-button flat-button-secondary">Logout</a>
            </div>

        );
    }
}