import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../components/Header'
import SpanishVerbSearch from '../components/SpanishVerbSearch'
import AddSpanishVerb from '../components/AddSpanishVerb';
import EditSpanishVerb from '../components/EditSpanishVerb';
import { NotFoundPage } from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={SpanishVerbSearch} exact={true} />
                <Route path="/add-verb" component={AddSpanishVerb} />
                <Route path="/edit-verb/:id" component={EditSpanishVerb} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;