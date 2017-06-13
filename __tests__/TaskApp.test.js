import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import TaskApp from '../app/assets/javascripts/TaskApp'
import TaskForm from '../app/assets/javascripts/TaskForm'


test('has a .taskApp classname', t => {
  const wrapper = shallow(<TaskApp/>);
  t.true(wrapper.hasClass('taskApp'));
});
