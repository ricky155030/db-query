import React from 'react'
import { connect } from 'react-redux'
import { Input, Header, Form, TextArea, Button, Divider } from 'semantic-ui-react'
import Select from 'react-select'

class Update extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      name,
      query,
      description
    } = this.props.template

    return (
      <div>
        <Header as="h3">
          Update
        </Header>
        <Divider horizontal hidden />
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Name</label>
              <Input mini={true} defaultValue={name}/>
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <Input mini={true} defaultValue={description}/>
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
        <Button floated="right">
          Save
        </Button>
        <Divider horizontal hidden clearing />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const {
    id
  } = props.match.params

  return {
    template: state.sql.templates.filter(t => t.id == id)[0]
  }
}

const dispatchProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, dispatchProps)(Update)
