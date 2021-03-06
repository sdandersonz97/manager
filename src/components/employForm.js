import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Picker, StyleSheet, Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { employeeUpdate } from '../actions'
class EmployForm extends Component {
    
    render() {
        const { employeeUpdate, name, phone, shift } = this.props
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Name" 
                        placeholder="Jane"
                        value={name}
                        onChangeText={value => employeeUpdate({prop: 'name', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone" 
                        placeholder="555-555-555"
                        value={phone}
                        onChangeText={value => employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>
                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerLabelStyle}> Shift </Text>
                    <Picker
                        selectedValue={shift}
                        onValueChange={value => employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    pickerLabelStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
})
export default connect(null, { employeeUpdate })(EmployForm)