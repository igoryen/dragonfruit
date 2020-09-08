import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addVerbform } from './actions/verbforms'
import getVisibleVerbforms from './selectors/verbforms'
import './index.css';
import * as serviceWorker from './serviceWorker';

import AppRouter from './routers/AppRouter';


const store = configureStore()

store.dispatch(addVerbform({ spa: 'voy', rus: 'иду', createdAt: 1599590275939 }))
// store.dispatch(addVerbform({ spa: 'pongo', rus: 'кладу'}))
// store.dispatch(addVerbform({ spa: 'pones', rus: 'кладёшь'}))
// store.dispatch(addVerbform({ spa: 'pone', rus: 'кладёт'}))
// store.dispatch(addVerbform({ spa: 'ponemos', rus: 'кладём'}))
// store.dispatch(addVerbform({ spa: 'ponéis', rus: 'кладёте'}))
// store.dispatch(addVerbform({ spa: 'caigo', rus: 'падаю'}))
// store.dispatch(addVerbform({ spa: 'caes', rus: 'падаешь'}))
// store.dispatch(addVerbform({ spa: 'cae', rus: 'падает'}))
// store.dispatch(addVerbform({ spa: 'caemos', rus: 'падаем'}))
// store.dispatch(addVerbform({ spa: 'caéis', rus: 'падаете'}))
// store.dispatch(addVerbform({ spa: 'caen', rus: 'падают'}))
// store.dispatch(addVerbform({ spa: 'hago', rus: 'делаю'}))
// store.dispatch(addVerbform({ spa: 'haces', rus: 'делаешь'}))
// store.dispatch(addVerbform({ spa: 'hace', rus: 'делает'}))
// store.dispatch(addVerbform({ spa: 'hacemos', rus: 'делаем'}))
// store.dispatch(addVerbform({ spa: 'hacéis', rus: 'делаете'}))
// store.dispatch(addVerbform({ spa: 'hacen', rus: 'делаем'}))




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
