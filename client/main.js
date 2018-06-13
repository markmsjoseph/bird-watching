import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, withRouter } from 'react-router-dom';
import {Tracker} from 'meteor/tracker';
import createHistory from 'history/createBrowserHistory'
import {Session} from 'meteor/session';

import Home from '../imports/ui/Home';
import AddSighting from '../imports/ui/AddSighting';
import NotFound from '../imports/ui/NotFound';

const history = createHistory();


//switch moves through route definitions in order till it finds a match so anything that
//doesnt match it defaults to the bottom router
//browserrouter requires 1 child element

const routes = (
  <Router history={history}>
        <Switch>
            <Route path="/" exact={true} component = {Home} />
            <Route path="/addSighting" exact={true} component = {AddSighting} />
            <Route path="*" component={NotFound} />
        </Switch>
  </Router>
);



Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
