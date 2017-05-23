import React from 'react'
import { connect } from 'react-redux'
import { Input, Header, Form, TextArea, Button, Divider } from 'semantic-ui-react'
import Select from 'react-select'

class Create extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
            <TextArea placeholder="Your sql query here" />
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

export default Create
