import * as React from "react";

import './siteHeader.css';

export const SiteHeader: React.StatelessComponent<any> = () => {
    return (
        <header className="app-header">
            <h1 className="app-title">cognito / aws-amplify / login poc</h1>
        </header>
    );
};
