import React from 'react';

export default class Task extends React.Component {
  handleDelete(e) {
    e.preventDefault();
    this.props.onTaskDelete({id: this.props.id});
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.onTaskUpdate({task: {id: this.props.id, status: e.target.value}});
  }

  render() {
    return(
      <tr key={this.props.id}>
        <td>
          {this.props.content}
        </td>
        <td>
        <select defaultValue={this.props.status} onChange={this.handleUpdate.bind(this)}>
          <option value="todo" key="todo">todo</option>
          <option value="doing" key="doing">doing</option>
          <option value="done" key="done">done</option>
        </select>
        </td>
        <td>
          <button type="button" name="delete" value="delete" onClick={this.handleDelete.bind(this)} >Delete</button>
        </td>
      </tr>
    );
  }
}
