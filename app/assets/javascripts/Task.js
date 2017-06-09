import React from 'react';

export default class Task extends React.Component {
  render() {
    return(
      <tr key={this.props.id}>
        <td>
          {this.props.content}
        </td>
        <td>
          {this.props.status}
        </td>
      </tr>
    );
  }
}
