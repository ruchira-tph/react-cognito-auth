import * as React from "react";
import { Route, RouteProps } from 'react-router';

import { Header } from '../header';
import './public.route.css';

export const PublicRoute: React.StatelessComponent<RouteProps> = (props: RouteProps) => {
    const { component, ...rest } = props;

    // tslint:disable
    return (
        <div className="public">
            <Header title="Public" />

            <div className="content">
                <Route {...rest} render={props =>
                    React.createElement(component as any, props)
                } />
            </div>
        </div>
    );
};
