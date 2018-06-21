import * as React from "react";
import { Redirect } from 'react-router-dom';

import { AuthService } from '../../services/auth';

import './login.css';

interface LoginPageProps {
    location: {
        state: {
            from: string;
        };
    };
}

export class Login extends React.Component<LoginPageProps, any> {

    auth = new AuthService();
    state: {
        username: string;
        password: string;
        redirectToReferrer: boolean;
        loading: boolean;
    };

    constructor(props: any) {
        super(props);

        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false,
            loading: false,
        };

        this.onInputChanged = this.onInputChanged.bind(this);
        this.onLoginClicked = this.onLoginClicked.bind(this);
    }

    componentDidMount(){
        // if already logged in, redirect
        this.auth.getAuthenticatedUser().then(user => {
            this.setState({ redirectToReferrer: !!user });    
        })
    }

    onInputChanged(event: any) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async onLoginClicked(e: any) {
        e.preventDefault();

        this.setState({ loading: true });

        const user = await this.auth.login(this.state.username, this.state.password);

        this.setState({
            loading: false,
            redirectToReferrer: !!user
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/secure' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (

            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onInputChanged} />
                        <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onInputChanged} />
                        <button className="flat-button flat-button-secondary" onClick={this.onLoginClicked}>login</button>
                    </form>
                </div>
            </div>

        );
    }
}