import * as React from "react";
import { Link } from "react-router-dom";

export const Home: React.StatelessComponent<any> = () => {
    return (
        <div>
            <p>Welcome to this amazing site</p>
            <p>You are not logged in.</p>
            <Link to="/login" className="flat-button flat-button-secondary">Login</Link>
        </div>
    );
}