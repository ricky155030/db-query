import React from 'react'
import { connect } from 'react-redux'
import { Sidebar, Menu } from 'semantic-ui-react'

class MainSidebar extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {
      isOpen
    } = this.props

    return (
      <Sidebar 
        className="grey darken-2"
        animation="push" 
        visible={isOpen} 
        as={Menu} 
        inverted 
        width="thin" 
        vertical 
        borderless
      >
        <Menu.Item
          onClick={() => this.context.router.push('/Query')}
        >
          Query
        </Menu.Item>
        <Menu.Item
          onClick={() => this.context.router.push('/File')}
        >
          Template
        </Menu.Item>
        <Menu.Item>History</Menu.Item>
      </Sidebar>
    )
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.sidebar.isOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSidebar)
