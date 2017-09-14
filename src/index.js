import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/posts-index.js';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


const Root = ()=>(<div>Home</div>);
class Hello   extends React.Component{ render(){return(<div>Hello!</div>)}};
const Sub  =  ()=> (<div>sub {location.href}</div>);
const Goodbye= ()=>(<div>Goodbye function</div>);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h1>Header</h1>
        <Route path="/"        component={PostsIndex}/>
        <Route path="/hello"      component={Hello}/>
        <Route path="/hello/:id"  component={Sub}/>
        <Route path="/goodbye" component={Goodbye}/>
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
