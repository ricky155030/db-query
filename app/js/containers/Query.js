import React from 'react'
import { connect } from 'react-redux'
import { Header, Form, TextArea, Button, Divider } from 'semantic-ui-react'
import Select from 'react-select'

const options = [
  { value: 'MES2', label: 'MES2' },
  { value: 'MES14', label: 'MES14' }
]

class Query extends React.Component {
  state = {
    db: null,
    dbs: [],
    multi: false
  }

  constructor(props) {
    super(props)
  }

  handleSelectDB = ({ value }) => this.setState({ db: value })

  handleSelectMultiDB = data => this.setState({ dbs: data.map(d => d.value) })

  handleSelectionDBType = isMulti => this.setState({ multi: isMulti })

  render() {
    const {
      db,
      dbs,
      multi
    } = this.state

    return (
      <div>
        <Header as="h2">
          SQL Query
          <Header.Subheader>
            Query sql with custom statement.
          </Header.Subheader>
        </Header>
        <Divider horizontal hidden />
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
        <label>Query</label>
        <Form>
          <TextArea placeholder="Your sql query here" />
        </Form>
        <br />
        <Button color="teal" floated="right">
          Submit
        </Button>
      </div>
    )
  }
}

export default Query
