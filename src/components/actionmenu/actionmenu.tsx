import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import { AuthService } from "../../services/auth";

import './actionmenu.css';

interface Props extends RouteComponentProps<any> {
    user: any;
}

class ActionMenuComponent extends React.Component<Props> {

    auth = new AuthService();

    constructor(props: any) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e: any) {
        e.preventDefault();

        this.auth.logout().then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        const { user } = this.props;

        return (
            <div className="action-menu">
                <div className="user-action">
                    <div className="username">{user.username}</div>
                </div>
                <div className="user-action">
                    <a onClick={this.handleLogout} className="flat-button flat-button-secondary">Logout</a>
                </div>
            </div>
        );
    }
};

export const ActionMenu = withRouter<Props>(ActionMenuComponent);