import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Test from './Test';

ReactDOM.render(
  <div>
    <p>Hello World</p>
    <Test />
  </div>,
  document.getElementById('app')
)