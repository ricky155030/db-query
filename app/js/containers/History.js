import React from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Button, Message, Accordion, Label, Icon, Header, Item, Segment } from 'semantic-ui-react'
import Select from 'react-select'
import moment from 'moment'
import { setQuerySQL } from '../actions/query'

class History extends React.Component {
  constructor(props) {
    super(props)
  }

  handleQueryClick = sql => {
    const {
      history,
      setQuerySQL
    } = this.props

    setQuerySQL(sql)
    history.push('/query')
  }

  generateHistoryItem() {
    const {
      queryHist
    } = this.props

    return queryHist.reverse().map((h, index) => (
      <Item key={index}>
        <Item.Content>
          <Item.Meta>
            <Icon name="time" />
            <span>{ moment(h.time).format('YYYY-MM-DD HH:mm:ss') }</span>
          </Item.Meta>
          <Item.Description>
            <Segment>
              { h.sql }
            </Segment>
          </Item.Description>
          <Item.Extra>
            { h.db.map(db => <Label>{ db }</Label>) }
            <Button
              mini
              floated="right"
              className="materialize-teal darken-2 materialize-white-text"
              onClick={() => this.handleQueryClick(h.sql)}
            >
              <Icon name="database" />
              Query
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h3" className="materialize-blue-text text-darken-3">
          <Icon name="history" circular />
          <Header.Content>
            History
            <Header.Subheader>
              Your query history
            </Header.Subheader>
          </Header.Content>
        </Header>
        {
          this.props.queryHist.length > 0 ?
          <Segment basic padded>
            <Item.Group divided>
              { this.generateHistoryItem() }
            </Item.Group>
          </Segment> :
          <Message warning compact>
            No History
          </Message>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const {
    history
  } = state.sql

  return {
    queryHist: history
  }
}

const dispatchProps = dispatch => {
  return {
    setQuerySQL: sql => dispatch(setQuerySQL(sql))
  }
}

export default connect(mapStateToProps, dispatchProps)(History)
