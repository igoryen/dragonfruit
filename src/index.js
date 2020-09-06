import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addVerbForm } from './actions/verbforms'
import { setTextFilter } from './actions/filters'
import getVisibleVerbforms from './selectors/verbforms'
import './index.css';
import * as serviceWorker from './serviceWorker';

import AppRouter from './routers/AppRouter';


const store = configureStore()

store.dispatch(addVerbForm({ spa: 'caigo', rus: 'падаю' }))
store.dispatch(addVerbForm({ spa: 'voy', rus: 'иду' }))
store.dispatch(setTextFilter('д'))

setTimeout( () => {
    store.dispatch( setTextFilter( 'а' ) )
}, 3000 )

const state = store.getState()
const visibleVerbforms = getVisibleVerbforms(state.verbforms, state.filters)
console.log('visibleVerbforms', visibleVerbforms)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
