import React from 'react'
import { connect } from 'react-redux'
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
      isMinify,
      pathname
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
          active={pathname.toLowerCase().indexOf('/query') != -1}
          onClick={() => this.context.router.push('/query')}
          title="SQL Query"
        >
          <Icon name="search" />
          {
            !isMinify && 
            <span>Query</span>
          }
        </Menu.Item>
        <Menu.Item
          active={pathname.toLowerCase().indexOf('/template') != -1}
          onClick={() => this.context.router.push('/template')}
          title="Template"
        >
          <Icon name="file" />
          {
            !isMinify && 
            <span>Template</span>
          }
        </Menu.Item>
      </Sidebar>
    )
  }
}

const mapStateToProps = state => {
  const {
    pathname
  } = state.routing.locationBeforeTransitions
  return {
    isMinify: state.sidebar.isMinify,
    pathname
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSidebar)
