import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from './reducers'
import AppContainer from './containers/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.css'
import 'react-select/dist/react-select.min.css'
import '../css/color.css'
import '../css/style.css'
import 'animate.css'

const logger = createLogger()
const createStoreMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore)

const store = createStoreMiddleware(RootReducer)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AppContainer />
      </Router>
    </Provider>,
    document.getElementById('react-content')
  )
}

render()
