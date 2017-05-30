import React from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Menu, Grid, Accordion, Icon, Header, Form, TextArea, Button, Divider, Segment, Message } from 'semantic-ui-react'
import Select from 'react-select'
import { requestSQLResult } from '../../actions/sql'
import { setCreateSQL } from '../../actions/template'
import { setQueryDB, setQuerySQL } from '../../actions/query'
import QueryResult from './Result'

const options = [
  { value: 'MES2', label: 'MES2' },
  { value: 'MES14', label: 'MES14' }
]

class Query extends React.Component {
  state = {
    activeIndex: 0
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const query = get(this.props.template, 'query', null)

    if(query) {
      this.props.setQuerySQL(query)
    }
  }

  componentWillUnmount() {
  }

  handleSelectDB = data => {
    const db = data.map(d => d.value)
    this.props.setQueryDB(db)
  }

  handleTextAreaChange = (e, { value }) => {
    this.props.setQuerySQL(value)
  }

  handleActiveIndexChange = (e, activeIndex) => this.setState({ activeIndex })

  handleCreateNewTemplate = () => {
    const {
      sql,
      history,
      setCreateSQL
    } = this.props

    setCreateSQL(sql)
    history.push('/template/Create')
  }

  generateInformation() { const {
      name,
      author,
      description
    } = this.props.template

    return (
      <Form.Group widths={16}>
        <Form.Field width={3}>
          <label>Name</label>
          <Segment>
          { name }
          </Segment>
        </Form.Field>
        <Form.Field width={3}>
          <label>Author</label>
          <Segment>
          { author }
          </Segment>
        </Form.Field>
        <Form.Field width={10}>
          <label>Description</label>
          <Segment>
          { description }
          </Segment>
        </Form.Field>
      </Form.Group>
    )
  }

  handleSubmit = () => {
    const {
      db,
      sql
    } = this.props

    this.props.requestSQLResult(sql, db)
    this.setState({ activeIndex: 1 })
  }

  render() {
    const {
      activeIndex
    } = this.state

    const {
      db,
      sql,
      result
    } = this.props

    return (
      <div>
        <Header as="h3" className="materialize-blue-text text-darken-3">
          <Icon name="database" circular />
          <Header.Content>
            SQL Query
            <Header.Subheader>
              Query sql with custom statement.
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Accordion
          fluid
          activeIndex={activeIndex}
          onTitleClick={this.handleActiveIndexChange}
        >
          <Accordion.Title>
            <Header as="h3">
              <Icon name="dropdown" />
              Query
            </Header>
          </Accordion.Title>
          <Accordion.Content>
            <Segment padded basic>
              <label>
                <b>Database</b>
              </label>
              <Select
                multi
                options={options}
                value={db}
                onChange={this.handleSelectDB}
              />
              <br />
              <Form>
                { this.props.template && this.generateInformation() }
                <Form.Field>
                  <label>Query</label>
                  <TextArea 
                    placeholder="Your sql query here" 
                    onChange={this.handleTextAreaChange}
                    value={sql}
                  />
                </Form.Field>
              </Form>
              <br />
              <Button 
                color="blue" 
                floated="right"
                onClick={this.handleSubmit}
                disabled={!sql || db.length == 0}
              >
                Submit
              </Button>
              <Button
                floated="right"
                disabled={!sql}
                onClick={this.handleCreateNewTemplate}
              >
                <Icon name="plus" />
                New Template
              </Button>
              <Divider hidden horizontal clearing />
            </Segment>
          </Accordion.Content>
          <Accordion.Title>
            <Header as="h3">
              <Icon name="dropdown" />
              Result
            </Header>
          </Accordion.Title>
          <Accordion.Content>
            <Segment padded basic>
              <QueryResult result={result} />
            </Segment>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const {
    id
  } = props.match.params

  const {
    templates
  } = state.sql

  const {
    db,
    sql,
    result
  } = state.query

  return {
    db,
    sql,
    result,
    template: templates.filter(t => t.id == id)[0]
  }
}

const dispatchProps = dispatch => {
  return {
    setCreateSQL: sql => dispatch(setCreateSQL(sql)),
    requestSQLResult: (sql, db) => dispatch(requestSQLResult(sql, db)),
    setQuerySQL: sql => dispatch(setQuerySQL(sql)),
    setQueryDB: db => dispatch(setQueryDB(db))
  }
}

export default connect(mapStateToProps, dispatchProps)(Query)
