import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './App';
import './style/index.scss';

render(<App />, document.getElementById('app'));
