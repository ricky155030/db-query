import React from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import { last } from 'lodash'
import { Icon, Header, Form, TextArea, Button, Divider, Segment, Menu } from 'semantic-ui-react'
import Select from 'react-select'
import Create from './Create'
import Update from './Update'
import List from './List'

const routing = [
  {
    name: 'list',
    display: 'List',
    path: '/template',
    icon: <Icon name="list" />
  },
  {
    name: 'create',
    display: 'Create',
    path: '/template',
    icon: <Icon name="plus" />
  }
]

class Query extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClickTab = (e, { name }) => this.props.history.push(`/template/${name}`)

  generateMenuItems = () => {
    const {
      location
    } = this.props

    const activeClassName = "materialize-blue-grey materialize-white-text"

    return routing.map((r, index) => {
      const pathname = `${r.path}/${r.name}`.toUpperCase()
      const isActive = location.pathname.toUpperCase().indexOf(pathname) != -1
      const className = isActive && activeClassName

      return (
        <Menu.Item
          key={index}
          name={r.name}
          onClick={this.handleClickTab}
          className={className}
        >
          { r.icon }
          { r.display }
        </Menu.Item>
      )
    })
  }
  
  render() {
    const {
      history,
      location
    } = this.props

    return (
      <div>
        <Header as="h3" className="materialize-blue-text text-darken-3">
          <Icon name="file" circular />
          <Header.Content>
            Template
            <Header.Subheader>
              SQL Collections
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Divider horizontal hidden />
        <Menu icon="labeled">
          { this.generateMenuItems() }
        </Menu>
        <Segment padded>
          <Switch>
            <Route path="/template/list" component={withRouter(List)} />
            <Route path="/template/create" component={withRouter(Create)} />
            <Route path="/template/update/:id" component={withRouter(Update)} />
            <Redirect from="/template" to="/template/list" />
            <Route component={() => <span>Not Found</span>} />
          </Switch>
        </Segment>
      </div>
    )
  }
}

export default Query
