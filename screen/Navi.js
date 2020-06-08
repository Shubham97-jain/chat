import React from 'react';
import Login from '../screen/Login';
import Forgot from '../screen/Register';
import Register from  '../screen/Register';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { NavigationContainer } from '@react-navigation/native';



const RootStack = createStackNavigator(
    {
        Login,
        Forgot,
        Register
      
    },
    {
      initialRouteName: 'Login',
      defaultNavigationOptions: {
        header: null
    }
    }
  );

  const AppContainer = createAppContainer(RootStack);

  export default class Navi extends React.Component {
    render() {
      return <AppContainer />;
    }
  }