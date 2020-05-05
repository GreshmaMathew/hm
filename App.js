import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Router from './src/navigation/router';

function App() {
  return <Router />;
}

export default App;
