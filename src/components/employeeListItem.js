import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { CardSection } from './common'

class EmployeeListItem extends Component {
    onRowPress() {
        console.log('press')
        const { navigation, employee } = this.props
        navigation.navigate('EmployeeEdit', { employee })
    }
    render(){
        const { employee } = this.props
        return (
            <TouchableOpacity onPress={()=>this.onRowPress()}>
                <CardSection>
                    <Text style={styles.titleStyle}> { employee.name } </Text>
                </CardSection>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    titleStyle:{
        paddingLeft: 15,
        fontSize: 18
    }
})
export default EmployeeListItem