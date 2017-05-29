import React from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Accordion, Icon, Header, Form, TextArea, Button, Divider, Segment, Message } from 'semantic-ui-react'
import Select from 'react-select'
import { setCreateQuery, requestSQLResult, resetSQLResult } from '../actions/sql'

const options = [
  { value: 'MES2', label: 'MES2' },
  { value: 'MES14', label: 'MES14' }
]

class Query extends React.Component {
  state = {
    db: null,
    dbs: [],
    multi: false,
    query: ''
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const query = get(this.props.template, 'query', null)
    this.setState({ query })
  }

  componentWillUnmount() {
    this.props.resetSQLResult()
  }

  handleSelectDB = data => {
    const value = get(data, 'value', null)
    this.setState({ db: value })
  }

  handleSelectMultiDB = data => this.setState({ dbs: data.map(d => d.value) })

  handleSelectionDBType = isMulti => this.setState({ multi: isMulti })

  handleTextAreaChange = (e, { value }) => this.setState({ query: value })

  handleActiveIndexChange = (e, activeIndex) => this.setState({ activeIndex })

  handleCreateNewTemplate = () => {
    const {
      query
    } = this.state

    const {
      history,
      setCreateQuery
    } = this.props

    setCreateQuery(query)
    history.push('/template/Create')
  }

  generateInformation() {
    const {
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
      query
    } = this.state

    this.props.requestSQLResult(query) 
    this.setState({ activeIndex: 1 })
  }

  renderResult() {
    const {
      result
    } = this.props

    if(!result) {
      return (
        <Message warning>
          You should query first.
        </Message>
      )
    }

    return (
      <Segment>
        { result }
      </Segment>
    )
  }

  render() {
    const {
      db,
      dbs,
      multi,
      query,
      activeIndex
    } = this.state

    return (
      <div>
        <Header as="h2" className="materialize-blue-text text-darken-3">
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
          defaultActiveIndex={0}
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
  			    <Button.Group size="mini">
    			    <Button positive={!multi} onClick={() => this.handleSelectionDBType(false)}>Single</Button>
    			    <Button.Or />
    			    <Button positive={multi} onClick={() => this.handleSelectionDBType(true)}>Multiple</Button>
  			    </Button.Group>
            <Divider horizontal hidden />
            <label>Database</label>
            {
              multi ? 
              <Select
                multi
                options={options}
                value={dbs}
                onChange={this.handleSelectMultiDB}
              /> :
              <Select
                options={options}
                value={db}
                onChange={this.handleSelectDB}
              />
            }
            <Divider horizontal hidden />
            <Form>
              { this.props.template && this.generateInformation() }
              <Form.Field>
                <label>Query</label>
                <TextArea 
                  placeholder="Your sql query here" 
                  onChange={this.handleTextAreaChange}
                  value={query}
                />
              </Form.Field>
            </Form>
            <br />
            <Button
              disabled={!query}
              onClick={this.handleCreateNewTemplate}
            >
              Create as New Template
            </Button>
            <Button 
              color="blue" 
              floated="right"
              onClick={this.handleSubmit}
              disabled={!query || !db}
            >
              Submit
            </Button>
          </Accordion.Content>
          <Accordion.Title>
            <Header as="h3">
              <Icon name="dropdown" />
              Result
            </Header>
          </Accordion.Title>
          <Accordion.Content>
            { this.renderResult() }
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
    result,
    templates
  } = state.sql

  return {
    template: templates.filter(t => t.id == id)[0],
    result
  }
}

const dispatchProps = dispatch => {
  return {
    setCreateQuery: query => dispatch(setCreateQuery(query)),
    requestSQLResult: sql => dispatch(requestSQLResult(sql)),
    resetSQLResult: () => dispatch(resetSQLResult())
  }
}

export default connect(mapStateToProps, dispatchProps)(Query)
