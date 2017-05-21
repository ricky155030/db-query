import React from 'react'
import { connect } from 'react-redux'
import { Sidebar, Menu } from 'semantic-ui-react'

class MainSidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      isOpen
    } = this.props

    console.log(isOpen)

    return (
      <Sidebar className="blue-grey" animation="push" visible={isOpen} as={Menu} inverted width="thin" vertical>
        <Menu.Item>History</Menu.Item>
        <Menu.Item>Saved SQL</Menu.Item>
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
