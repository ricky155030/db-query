import React from 'react'
import { connect } from 'react-redux'
import { Sidebar } from 'semantic-ui-react'
import MainContent from './MainContent'
import MainSidebar from './MainSidebar'
import Navigator from './Navigator'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Sidebar.Pushable style={{ minHeight: '100vh' }}>
        <MainSidebar />
        <Sidebar.Pusher style={{ padding: '15px' }}>
          <Navigator />
          <MainContent>
            { this.props.children }
          </MainContent>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
