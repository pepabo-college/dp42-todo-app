import React from 'react';
import ReactDOM from 'react-dom';

export default class TaskForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var content = ReactDOM.findDOMNode(this.refs.content).value.trim();
    if (!content) {
      return;
    }
    this.props.onTaskSubmit({content: content, status: 'todo'});
    ReactDOM.findDOMNode(this.refs.content).value = '';
    return;
  }

  render() {
    return(
      <form className="todoForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="ToDo" ref="content" />
        <input type="submit" value="登録" />
      </form>
    );
  }
}
