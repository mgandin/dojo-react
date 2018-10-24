import React, { Component } from 'react'
import './App.css'
import Vehiculier from './component/Vehiculier'
import { Provider } from 'react-redux'
import * as Redux from 'redux'
import selector from './redux/selector'

const store = Redux.createStore(
    Redux.combineReducers({ selector}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
      <Provider store={store}>
        <Vehiculier/>
      </Provider>
)

export default App
