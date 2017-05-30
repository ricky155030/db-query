import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Query from './Query'
import Template from './Template'
import History from './History'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ marginTop: '41px' }}>
        <Switch>
          <Route exact path="/history" component={withRouter(History)} />
          <Route exact path="/query" component={withRouter(Query)} />
          <Route exact path="/query/:id" component={withRouter(Query)} />
          <Route path="/template" component={withRouter(Template)} />
          <Route component={() => <span>Not Found</span>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(MainContent)
