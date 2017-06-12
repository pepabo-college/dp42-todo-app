import React from 'react';

export default class Task extends React.Component {

  constructor() {
    super();
    this.state = {isEditable: false, editingText: ''};
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.onTaskDelete({id: this.props.id});
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.onTaskUpdate({task: {id: this.props.id, status: e.target.value}});
  }
  handleDoubleClick(e) {
    e.preventDefault();
    this.setState({ isEditable: true ,editingText: this.props.content});
    console.log(this.state.isEditable);
  }

  render() {
    return(
      <tr key={this.props.id}>
        <td onDoubleClick={this.handleDoubleClick.bind(this)}>
          {this.props.content}
        </td>
        {this.state.isEditable ? 
        <td >
          <input type="text" defaultValue={this.state.editingText}></input>
        </td>
        : null}
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
