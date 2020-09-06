import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import SpanishVerbSearch from './components/SpanishVerbSearch'
import * as serviceWorker from './serviceWorker';
import { AddSpanishVerb } from './components/AddSpanishVerb';
import { EditSpanishVerb } from './components/EditSpanishVerb';
import { NotFoundPage } from './components/NotFoundPage';


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={SpanishVerbSearch} exact={true}/>
            <Route path="/add-verb" component={AddSpanishVerb} />
            <Route path="/edit-verb" component={EditSpanishVerb} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
