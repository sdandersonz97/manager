import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployForm from './employForm'
import Communications from 'react-native-communications'
import { Button, Card, CardSection, Confirm } from './common'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
class EmployeeEdit extends Component {
    state = {
        visible: false
    }
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
    onFirePress = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    onAccept = () => {
        const { navigation, employeeDelete } = this.props 
        employeeDelete({uid: navigation.state.params.employee.uid}, () => navigation.goBack())
    }
    onDecline = () =>  {
        this.setState({
            visible: false
        })
    }
    render(){
        const { visible } = this.state
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
                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={visible}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}
const mapStateToProps = state => {
    const { name, phone, shift } = state.employForm
    return { name, phone, shift }
}
export default connect(mapStateToProps,{ employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)