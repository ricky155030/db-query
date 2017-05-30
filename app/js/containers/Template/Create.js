import React from 'react'
import { connect } from 'react-redux'
import { Input, Header, Form, TextArea, Button, Divider } from 'semantic-ui-react'
import Select from 'react-select'
import { setCreateSQL, setCreateName, setCreateDescription, resetCreateData } from '../../actions/template'

class Create extends React.Component {
  constructor(props) {
    super(props)
  }

  handleNameChange = (e, { value }) => this.props.setCreateName(value)

  handleDescriptionChange = (e, { value }) => this.props.setCreateDescription(value)

  handleSQLChange = (e, { value }) => this.props.setCreateSQL(value)

  render() {
    const {
      sql,
      name,
      description
    } = this.props

    return (
      <div>
        <Header as="h3">
          Create
          <Header.Subheader>
            Add a new SQL Template
          </Header.Subheader>
        </Header>
        <Divider horizontal hidden />
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Name</label>
              <Input 
                mini 
                value={name} 
                onChange={this.handleNameChange} 
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <Input 
                mini 
                value={description} 
                onChange={this.handleDescriptionChange} 
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Query</label>
            <TextArea 
              value={sql}
              placeholder="Your sql query here" 
              onChange={this.handleSQLChange}
            />
          </Form.Field>
        </Form>
        <br />
        <Button color="blue" floated="right" disabled={!sql || !description || !name}>
          Submit
        </Button>
        <Button floated="right" onClick={this.props.resetCreateData}>
          Clear
        </Button>
        <Divider horizontal hidden clearing />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    sql,
    name,
    description
  } = state.template.create

  return {
    sql,
    name,
    description
  }
}

const dispatchProps = dispatch => {
  return {
    setCreateSQL: sql => dispatch(setCreateSQL(sql)),
    setCreateName: name => dispatch(setCreateName(name)),
    setCreateDescription: description => dispatch(setCreateDescription(description)),
    resetCreateData: () => dispatch(resetCreateData()),
  }
}

export default connect(mapStateToProps, dispatchProps)(Create)
