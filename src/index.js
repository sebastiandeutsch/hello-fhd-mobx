import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';

import todoStore from './stores/TodoStore';

ReactDOM.render(<Provider todoStore={todoStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
