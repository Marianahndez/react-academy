import React from 'react';
import ReactDOM from 'react-dom';
import store from './components/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './components/Home/App';
import PostView from './components/PostView/postView';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/post/:slug" component={PostView} />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
