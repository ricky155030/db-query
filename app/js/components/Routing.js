import React from 'react';
import { Route, IndexRoute, withRouter, Link } from 'react-router'

import App from '../containers/AppContainer'
import Query from '../containers/Query'

export default (
  <Route path="/" component={withRouter(App)}>
    <Route path="/query" component={withRouter(Query)} />
  </Route>
)
