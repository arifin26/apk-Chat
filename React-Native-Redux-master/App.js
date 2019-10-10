import React from 'react'
import Home from './src/Route/index'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from './src/Redux/reducer'
import thunk from 'redux-thunk'

class App extends React.Component{
  render(){
    return(
      <Provider store={createStore(reducer,{},applyMiddleware(thunk))}>
        <Home/>
      </Provider>
    )
  }
}
export default App