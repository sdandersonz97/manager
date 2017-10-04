import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from './src/components/common'
import LoginForm from './src/components/loginForm'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/reducers'
import firebase from 'firebase'
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
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <Header/>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}
