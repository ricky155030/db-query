import React from 'react'
import { connect } from 'react-redux'
import { Icon, Header, Form, TextArea, Button, Divider, Segment, Menu } from 'semantic-ui-react'
import Select from 'react-select'
import Create from './Create'

class Query extends React.Component {
  state = {
    tab: 'List'
  }

  constructor(props) {
    super(props)
  }

  handleClickTab = (e, { name }) => this.setState({ tab: name })

  renderTab() {
    const {
      tab
    } = this.state

    switch(tab) {
      case 'Create':
        return <Create />
      default: 
        return null
    }
  }

  render() {
    const {
      tab
    } = this.state

    return (
      <div>
        <Header as="h2">
          <Icon name="file" />
          <Header.Content>
            Template
            <Header.Subheader>
              SQL Collections
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Divider horizontal hidden />
        <Menu className="grey darken-1" attached="top" inverted>
          <Menu.Item
            name="List"
            onClick={this.handleClickTab}
            active={tab == "List"}
          >
            List
          </Menu.Item>
          <Menu.Item
            name="Create"
            onClick={this.handleClickTab}
            active={tab == "Create"}
          >
            Create
          </Menu.Item>
        </Menu>
        <Segment attached="bottom" padded>
          { this.renderTab() }
        </Segment>
      </div>
    )
  }
}

export default Query
