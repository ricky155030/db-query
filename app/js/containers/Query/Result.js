import React from 'react'
import { connect } from 'react-redux'
import { Divider, Menu, Grid, Icon, Segment, Message, Label } from 'semantic-ui-react'
import Select from 'react-select'
import moment from 'moment'

class QueryResult extends React.Component {
  state = {
    activeMenu: null
  }

  constructor(props) {
    super(props)
  }

  handleMenuClick = (e, { name }) => this.setState({ activeMenu: name })

  render() {
    const {
      result
    } = this.props

    const {
      activeMenu
    } = this.state

    if(result.length == 0) {
      return (
        <Message warning>
          You should query first.
        </Message>
      )
    }

    const active = (activeMenu || result[0].db)
    const data = result.filter(r => r.db == active)[0]

    return (
      <Grid divided>
        <Grid.Row>
          <Grid.Column computer={2} tablet={4} mobile={6}>
        		<Menu vertical fluid>
            	{ 
              	result.map((r, index) => (
                  <Menu.Item 
                    link
                    key={index}
                    name={r.db}
                    active={r.db == active}
                    onClick={this.handleMenuClick}
                  >
                    { r.db }
                  </Menu.Item>
              	))
            	}
        		</Menu>
          </Grid.Column>
          <Grid.Column computer={14} tablet={12} mobile={10}>
						<Label>
						  <Icon name="time" />
						  { moment(data.time).format('YYYY-MM-DD HH:mm:ss') }
						</Label>
						<Label className="materialize-blue-grey darken-2 materialize-white-text">
						  <Icon name="database" />
						  { data.db }
						</Label>
						<Segment>
						  {
                data.result
						  }
						</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

const dispatchProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, dispatchProps)(QueryResult)
