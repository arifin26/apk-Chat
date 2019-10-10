import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screen/Home'
import Input from '../screen/Input'

const Stack = createStackNavigator({
  Input: {
    screen: Input
  },
  Home: {
    screen: Home
  }
})

export default createAppContainer(Stack)
