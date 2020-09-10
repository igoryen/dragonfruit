import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        return firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            // .then(() => console.log('Sign-in successful.'));
    };
};

export const startLogout = () => {
    return () => {
        return firebase
            .auth()
            .signOut()
            // .then(() => console.log('Sign-out successful.'))
            // .catch((error) => console.log('error', error))
    }
}
