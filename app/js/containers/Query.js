import React from 'react'
import { connect } from 'react-redux'
import { Icon, Header, Form, TextArea, Button, Divider } from 'semantic-ui-react'
import Select from 'react-select'
import { setCreateQuery } from '../actions/sql'

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

  handleSelectDB = ({ value }) => this.setState({ db: value })

  handleSelectMultiDB = data => this.setState({ dbs: data.map(d => d.value) })

  handleSelectionDBType = isMulti => this.setState({ multi: isMulti })

  handleTextAreaChange = (e, { value }) => this.setState({ query: value })

  handleCreateNewTemplate = () => {
    const {
      query
    } = this.state

    this.props.setCreateQuery(query)
    this.props.router.push('/template/Create')
  }

  render() {
    const {
      db,
      dbs,
      multi,
      query
    } = this.state

    return (
      <div>
        <Header as="h2">
          <Icon name="search" />
          <Header.Content>
            SQL Query
            <Header.Subheader>
              Query sql with custom statement.
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Divider horizontal hidden />
  			<Button.Group size="mini">
    			<Button className={!multi && "blue"} onClick={() => this.handleSelectionDBType(false)}>Single</Button>
    			<Button.Or />
    			<Button className={multi && "blue"} onClick={() => this.handleSelectionDBType(true)}>Multiple</Button>
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
        <label>Query</label>
        <Form>
          <TextArea 
            placeholder="Your sql query here" 
            onChange={this.handleTextAreaChange}
            value={query}
          />
        </Form>
        <br />
        <Button
          onClick={this.handleCreateNewTemplate}
        >
          Create as New Template
        </Button>
        <Button 
          color="blue" 
          floated="right"
        >
          Submit
        </Button>
      </div>
    )
  }
}

const mapStateToProps = dispatch => {
  return {

  }
}

const dispatchProps = dispatch => {
  return {
    setCreateQuery: query => dispatch(setCreateQuery(query))
  }
}

export default connect(mapStateToProps, dispatchProps)(Query)
