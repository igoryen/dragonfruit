import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import SpanishVerbSearch from '../components/SpanishVerbSearch'
import AddVerbformPage from '../components/AddVerbformPage';
import EditVerbformPage from '../components/EditVerbformPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute  path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={SpanishVerbSearch} />
                <PrivateRoute path="/add-verb" component={AddVerbformPage} />
                <PrivateRoute path="/edit-verb/:id" component={EditVerbformPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;