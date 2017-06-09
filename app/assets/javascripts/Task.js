import React from 'react';

export default class Task extends React.Component {
  handleDelete(e) {
    e.preventDefault();
    this.props.onTaskDelete({id: this.props.id});
  }

  render() {
    return(
      <tr key={this.props.id}>
        <td>
          {this.props.content}
        </td>
        <td>
          {this.props.status}
        </td>
        <td>
          <button type="button" name="delete" value="delete" onClick={this.handleDelete.bind(this)} >Delete</button>
        </td>
      </tr>
    );
  }
}
