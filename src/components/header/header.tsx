import * as React from "react";
import { Link } from "react-router-dom";

import './header.css';

interface Props {
    title: string;
    children?: any;
}

export const Header: React.StatelessComponent<any> = (props: Props) => {
    const { title, children } = props;

    let menu = <Link to="/login" className="flat-button flat-button-secondary">Login</Link>;
    if (children) {
        menu = children;
    }

    return (
        <header className="app-header">
            <h1 className="app-title">{title}</h1>
            <div className="menu">
                {menu}
            </div>
        </header>
    );
};
