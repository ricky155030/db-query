import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { AppContainer } from 'react-hot-loader';
import RootReducer from './reducers'
import Root from './containers/Root';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
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
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history}/>
  </AppContainer>,
  document.getElementById('react-content')
)

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      const NewRoot = require('./containers/Root').default;
      ReactDOM.render(
        <AppContainer>
          <NewRoot store={store} history={browserHistory} />
        </AppContainer>,
        document.getElementById('react-content')
      );
    });
}
