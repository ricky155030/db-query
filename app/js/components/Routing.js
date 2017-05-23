import React from 'react';
import { Route, IndexRoute, withRouter, Link } from 'react-router'

import App from '../containers/AppContainer'
import Query from '../containers/Query'
import File from '../containers/File'

export default (
  <Route path="/" component={withRouter(App)}>
    <Route path="/query" component={withRouter(Query)} />
    <Route path="/template" component={withRouter(File)} />
    <Route path="/template/:tab" component={withRouter(File)} />
  </Route>
)
