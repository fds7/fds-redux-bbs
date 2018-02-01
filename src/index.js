import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyC5bvpoKyfa3qwTxhSt0PxgQZI2dI3QbZc',
  authDomain: 'fds-cra.firebaseapp.com',
  databaseURL: 'https://fds-cra.firebaseio.com',
  projectId: 'fds-cra',
  storageBucket: 'fds-cra.appspot.com',
  messagingSenderId: '966283711333',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
