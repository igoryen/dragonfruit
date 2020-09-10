import React from 'react'
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header'
import SpanishVerbSearch from '../components/SpanishVerbSearch'
import AddVerbformPage from '../components/AddVerbformPage';
import EditVerbformPage from '../components/EditVerbformPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={SpanishVerbSearch} />
                <Route path="/add-verb" component={AddVerbformPage} />
                <Route path="/edit-verb/:id" component={EditVerbformPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;