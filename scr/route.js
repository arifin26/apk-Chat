import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from './screen/Home';
import Coba from './screen/chatt'

const routes = createStackNavigator({
	home: { screen: Home },
	chat: { screen: Coba }
})

export default createAppContainer(routes);