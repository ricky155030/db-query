import React from 'react'
import { connect } from 'react-redux'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ marginTop: '41px' }}>
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default MainContent
