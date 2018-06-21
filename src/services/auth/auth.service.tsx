import { Auth } from 'aws-amplify';

export class AuthService {

    getAuthenticatedUser(): Promise<any> {
        return Auth.currentAuthenticatedUser()
            .then(user => {
                console.log('Logged in user:', user);
                return user;
            })
            .catch(err => console.log('error: ', err))
    }

    login(username: string, password: string): Promise<any> {
        return Auth.signIn(username, password)
            .then(user => {
                if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                    // HACK: this is a temp workaround
                    user.completeNewPasswordChallenge(password);
                }
                return user;
            })
            .catch(err => console.log(err));
    }

    logout(): Promise<any> {
        return Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

}