import React from 'react'
import { connect } from 'react-redux'
import { Sidebar } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import MainContent from './MainContent'
import MainSidebar from './MainSidebar'
import Navigator from './Navigator'
import { requestTemplates } from '../actions/sql'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestTemplates()
  }

  render() {
    return (
      <Sidebar.Pushable style={{ minHeight: '100vh' }}>
        <MainSidebar />
        <Sidebar.Pusher style={{ padding: '15px' }}>
          <Navigator />
          <MainContent />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const dispatchProps = dispatch => {
  return {
    requestTemplates: () => dispatch(requestTemplates())
  }
}

export default withRouter(connect(mapStateToProps, dispatchProps)(AppContainer))
