import React from 'react';
import ReactDOM from 'react-dom';

export default class Task extends React.Component {

  constructor() {
    super();
    this.state = {isEditable: false, editingText: ''};
  }
  componentDidUpdate() {
    let editing = ReactDOM.findDOMNode(this.refs.editing);
    editing && editing.focus();
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.onTaskDelete({id: this.props.id});
  }

  handleStatusUpdate(e) {
    e.preventDefault();
    this.props.onTaskUpdate({task: {id: this.props.id, status: e.target.value}});
  }
  handleDoubleClick(e) {
    e.preventDefault();
    this.setState({ isEditable: true ,editingText: this.props.content});
  }
  handleSubmitEdit(e) {
    e.preventDefault();
    this.props.onTaskUpdate({task: {id: this.props.id, content: e.target.editingForm.value}});
    this.setState({ isEditable: false });
  }

  handleBlurEdit(e) {
    e.preventDefault();
    this.setState({ isEditable: false });
  }

  showEditingForm(){
      return( 
        <td >
          <form onSubmit={this.handleSubmitEdit.bind(this)}>
          <input type="text" name="editingForm" ref="editing" defaultValue={this.state.editingText} 
            onBlur={this.handleBlurEdit.bind(this)}>
          </input>
        </form>
        </td>
        );
    }

  showTodo(){
    return(
      <td onDoubleClick={this.handleDoubleClick.bind(this)}>
        {this.props.content}
      </td>
    );
  }

  render() {
    return(
      <tr key={this.props.id}>
        {this.state.isEditable ? this.showEditingForm() : this.showTodo()}
        <td>
        <select defaultValue={this.props.status} onChange={this.handleStatusUpdate.bind(this)}>
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
