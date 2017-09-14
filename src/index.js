import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';
import PostsIndex from './components/posts-index.js';
import PostsNew   from './components/posts-new.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <h1>Header</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/new"  component={PostsNew}/>
          <Route path="/"     component={PostsIndex}/>
        </Switch>
      </BrowserRouter>
    </div>

  </Provider>
  , document.querySelector('.container'));
