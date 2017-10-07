import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Button } from './src/components/common'
import LoginForm from './src/components/loginForm'
import EmployCreate from './src/components/employCreate'
import EmployeeEdit from './src/components/employeeEdit'
import EmployeesList from './src/components/employeesList'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import reducer from './src/reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

function UdaciStatusBar({ backgroundColor, ...props }){
  return(
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
const MainNavigator = StackNavigator({
  Login:{
    screen: LoginForm,
    navigationOptions: {
      headerTinkColor: 'white',
      headerStyle: {
        backgroundColor: '#007aff'
      },
      title:'Welcome'
    }
  },
  EmployeesList:{
    screen: EmployeesList,
    navigationOptions: {
      headerTinkColor: 'white',
      headerStyle: {
        backgroundColor: '#007aff'
      },
      gesturesEnabled:false,
      title:'Employ List'      
    }
  },
  EmployCreate: {
    screen: EmployCreate,
    navigationOptions: {
      headerTinkColor: 'white',
      headerStyle: {
        backgroundColor: '#007aff'
      },
      title:'Create an Employ'
    }
  },
  EmployeeEdit: {
    screen: EmployeeEdit,
    navigationOptions: {
      headerTinkColor: 'white',
      headerStyle: {
        backgroundColor: '#007aff'
      },
      title:'Edit an Employ'
    }
  }
})

export default class App extends React.Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyAUU30UVVqwNuNoiMKR-1AQHU7HzZV7eMQ',
      authDomain: 'manager-52d30.firebaseapp.com',
      databaseURL: 'https://manager-52d30.firebaseio.com',
      projectId: 'manager-52d30',
      storageBucket: 'manager-52d30.appspot.com',
      messagingSenderId: '1016647539512'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducer, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <UdaciStatusBar backgroundColor='#007aff' barStyle='light-content'/>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
