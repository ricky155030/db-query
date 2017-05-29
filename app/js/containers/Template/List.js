import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Icon, Label } from 'semantic-ui-react'
import Select from 'react-select'

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      templates
    } = this.props

    return (
    	<Table celled striped>
      	<Table.Header>
        	<Table.Row>
          	<Table.HeaderCell colSpan="2" />
          	<Table.HeaderCell>Name</Table.HeaderCell>
          	<Table.HeaderCell>Author</Table.HeaderCell>
          	<Table.HeaderCell>Description</Table.HeaderCell>
          	<Table.HeaderCell>Tags</Table.HeaderCell>
        	</Table.Row>
      	</Table.Header>
      	<Table.Body>
      	{
          templates.map((t, index) => {
            return (
        	    <Table.Row key={index}>
          	    <Table.Cell collapsing>
            	    <Link to={`/query/${t.id}`}>
            	      <Label className="materialize-teal darken-2 materialize-white-text">
            	        <Icon name="database" size="large" /> 
            	        Query
            	      </Label>
            	    </Link>
          	    </Table.Cell>
          	    <Table.Cell collapsing>
            	    <Link to={`/template/update/${t.id}`}>
            	      <Label className="materialize-red darken-2 materialize-white-text">
            	        <Icon name="edit" size="large" /> 
            	        Edit
            	      </Label>
            	    </Link>
          	    </Table.Cell>
          	    <Table.Cell collapsing>
            	    { t.name }
          	    </Table.Cell>
          	    <Table.Cell collapsing>
          	      { t.author }
          	    </Table.Cell>
          	    <Table.Cell>
          	      { t.description }
          	    </Table.Cell>
          	    <Table.Cell>
          	      { t.label.map((l, index) => <Label key={index}>{l}</Label>) }
          	    </Table.Cell>
        	    </Table.Row>
            )
          })
      	}
      	</Table.Body>
    	</Table>
    )
  }
}

const mapStateToProps = state => {
  return {
    templates: state.sql.templates
  }
}

const dispatchProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, dispatchProps)(List)
