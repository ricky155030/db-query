import React from 'react'
import { connect } from 'react-redux'
import { Input, Header, Form, TextArea, Button, Divider } from 'semantic-ui-react'
import Select from 'react-select'

class Update extends React.Component {
  state = {}

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {
      name,
      query,
      description
    } = this.props.template

    this.setState({ name, query, description })
  }

  handleNameChange = (e, { value }) => this.setState({ name: value })

  handleDescriptionChange = (e, { value }) => this.setState({ description: value })

  handleSQLChange = (e, { value }) => this.setState({ query: value })

  render() {
    const {
      name,
      query,
      description
    } = this.state

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
              <Input mini={true} value={name} onChange={this.handleNameChange}/>
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <Input mini={true} value={description} onChange={this.handleDescriptionChange}/>
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Query</label>
            <TextArea 
              value={query}
              placeholder="Your sql query here" 
              onChange={this.handleSQLChange}
            />
          </Form.Field>
        </Form>
        <br />
        <Button color="blue" floated="right" disabled={!query || !name || !description}>
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
