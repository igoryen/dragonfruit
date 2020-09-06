import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import SpanishVerbSearch from './components/SpanishVerbSearch'
import * as serviceWorker from './serviceWorker';
import { AddSpanishVerb } from './components/AddSpanishVerb';
import { EditSpanishVerb } from './components/EditSpanishVerb';


const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={SpanishVerbSearch} exact={true}/>
            <Route path="/add-verb" component={AddSpanishVerb} />
            <Route path="/edit-verb" component={EditSpanishVerb} />
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
