import React from 'react'
import { connect } from 'react-redux'
import { last } from 'lodash'
import { Icon, Header, Form, TextArea, Button, Divider, Segment, Menu } from 'semantic-ui-react'
import Select from 'react-select'
import Create from './Create'
import List from './List'

class Query extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  handleClickTab = (e, { name }) => this.context.router.push(`/template/${name}`)
  
  render() {
    const {
      pathname
    } = this.props

    return (
      <div>
        <Header as="h2">
          <Icon className="materialize-grey-text" name="file" />
          <Header.Content>
            Template
            <Header.Subheader>
              SQL Collections
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Divider horizontal hidden />
        <Menu icon="labeled">
          <Menu.Item
            name="list"
            onClick={this.handleClickTab}
            className={pathname.toLowerCase().indexOf('/template/list') != -1 && "materialize-blue-grey materialize-white-text"}
          >
            <Icon name="list" />
            List
          </Menu.Item>
          <Menu.Item
            name="create"
            onClick={this.handleClickTab}
            className={pathname.toLowerCase().indexOf('/template/create') != -1 && "materialize-blue-grey materialize-white-text"}
          >
            <Icon name="plus" />
            Create
          </Menu.Item>
        </Menu>
        <Segment padded>
          { this.props.children }
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    pathname
  } = state.routing.locationBeforeTransitions

  return {
    pathname
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Query)
