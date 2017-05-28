import React from 'react';
import { Route, IndexRoute, withRouter, Link } from 'react-router'

import App from '../containers/AppContainer'
import Query from '../containers/Query'
import Template from '../containers/File'
import CreateTemplate from '../containers/File/Create'
import TemplateList from '../containers/File/List'

export default (
  <Route path="/" component={withRouter(App)}>
    <Route path="/query" component={withRouter(Query)} />
    <Route path="/template" component={withRouter(Template)}>
      <Route path="create" component={withRouter(CreateTemplate)} />
      <Route path="list" component={withRouter(TemplateList)} />
    </Route>
  </Route>
)
