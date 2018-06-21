// -----------------------------------
// Application configuration
// -----------------------------------
export const config = {
    AWS: {
        Auth: {
            region: process.env.REACT_APP_AWS_REGION || 'us-east-2',
            identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
            userPoolId: process.env.REACT_APP_USER_POOL_ID,
            userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
            mandatorySignIn: true
        }
    }
};

// @ts-ignore
// window.LOG_LEVEL = 'DEBUG';