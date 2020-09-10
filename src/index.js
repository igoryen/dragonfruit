import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startSetVerbforms } from './actions/verbforms'
import './index.scss';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import { firebase } from './firebase/firebase';

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))

store.dispatch(startSetVerbforms()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'))
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('logged in');
    } else {
        console.log('logged out');
    }
}); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
