import React from 'react'
import { connect } from 'react-redux'
import { Input, Header, Form, TextArea, Button, Divider } from 'semantic-ui-react'
import Select from 'react-select'

class Create extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      query
    } = this.props
    console.log(query)

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
              <Input mini/>
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <Input mini/>
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Query</label>
            <TextArea 
              value={query}
              placeholder="Your sql query here" 
            />
          </Form.Field>
        </Form>
        <br />
        <Button color="blue" floated="right">
          Save
        </Button>
        <Divider horizontal hidden clearing />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    query: state.sql.query
  }
}

const dispatchProps = dispatch => {
  return {
    setCreateQuery: query => dispatch(setCreateQuery(query))
  }
}

export default connect(mapStateToProps, dispatchProps)(Create)
