import React, { Component } from 'react'
import { connect } from 'redux'
import { View, Text } from 'react-native'
import { Button } from './common'
class EmployeesList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <Button onPress={() => navigation.navigate('EmployForm')}> + </Button>
        }
    }
    render(){
        return(
            <View>
                <Text>EmployeesList</Text>
            </View>
        )
    }
}

export default EmployeesList