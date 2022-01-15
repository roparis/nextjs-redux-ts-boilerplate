import React from 'react';
import ReactDOM from 'react-dom';
import Licenses from './index';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Licenses />, div);
  ReactDOM.unmountComponentAtNode(div);
});