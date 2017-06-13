import React from 'react';
import ReactDOM from 'react-dom';
import TaskApp from './TaskApp';
import 'bootstrap/dist/css/bootstrap.css'

$( () => {
  ReactDOM.render(
    <TaskApp url="/tasks" pollInterval={2000} />,
    document.getElementById('container')
  );
});
