import React from 'react'
import { connect } from 'react-redux'
import { Menu, Icon } from 'semantic-ui-react'
import { toggleSidebar } from '../actions/sidebar'

class Navigator extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      toggleSidebar
    } = this.props

    return (
      <Menu fixed="top" borderless>
        <Menu.Item icon onClick={toggleSidebar}>
          <Icon className="grey-text" name="content" />
        </Menu.Item>
        <Menu.Item icon>
          <Icon className="grey-text" name="mail" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item className="grey-text">
            <Icon name="user" /> Profile
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
