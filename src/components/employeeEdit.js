import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployForm from './employForm'
import Communications from 'react-native-communications'
import { Button, Card, CardSection } from './common'
import { employeeUpdate, employeeSave } from '../actions'
class EmployeeEdit extends Component {
    componentWillMount(){
        _.forEach(this.props.navigation.state.params.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value})
        })
    }
    onButtonPress = () => {
        const { navigation, name, phone, shift } = this.props
        this.props.employeeSave({name, phone, shift, uid: navigation.state.params.employee.uid}, () => navigation.goBack())
    }
    onTextPress = () => {
        const { phone, shift } = this.props
        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }
    render(){
        console.log(this.props)
        return (
            <Card>
                <EmployForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                   
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        )
    }
}
const mapStateToProps = state => {
    const { name, phone, shift } = state.employForm
    return { name, phone, shift }
}
export default connect(mapStateToProps,{ employeeUpdate, employeeSave })(EmployeeEdit)