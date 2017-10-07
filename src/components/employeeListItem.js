import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { CardSection } from './common'

class EmployeeListItem extends Component {
    render(){
        const { name } = this.props
        return (
            <CardSection>
                <Text style={styles.titleStyle}> { name } </Text>
            </CardSection>
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