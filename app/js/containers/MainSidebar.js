import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Popup, Icon, Sidebar, Menu } from 'semantic-ui-react'

class MainSidebar extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  } 
  render() {
    const {
      history,
      location,
      isMinify
    } = this.props

    const width = isMinify ? "very thin" : "thin"

    return (
      <Sidebar 
        visible
        className="materialize-blue-grey darken-2"
        animation="push" 
        as={Menu} 
        inverted 
        width={width}
        vertical 
        borderless
        icon={isMinify}
      >
        <Menu.Item
          active={location.pathname.indexOf('/query') != -1}
          onClick={() => history.push('/query')}
          title="SQL Query"
        >
          <Icon name="database" />
          {
            !isMinify && 
            <span>Query</span>
          }
        </Menu.Item>
        <Menu.Item
          active={location.pathname.indexOf('/template') != -1}
          onClick={() => history.push('/template/list')}
          title="Template"
        >
          <Icon name="file" />
          {
            !isMinify && 
            <span>Template</span>
          }
        </Menu.Item>
        <Menu.Item
          active={location.pathname.indexOf('/history') != -1}
          onClick={() => history.push('/history')}
          title="History"
        >
          <Icon name="history" />
          {
            !isMinify && 
            <span>History</span>
          }
        </Menu.Item>
      </Sidebar>
    )
  }
}

const mapStateToProps = state => {
  return {
    isMinify: state.sidebar.isMinify
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainSidebar))
