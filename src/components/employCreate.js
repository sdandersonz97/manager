import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployForm from './employForm'
import { Button, Card, CardSection } from './common'
import { employeeCreate } from '../actions'

class EmployCreate extends Component {
    onButtonPress = () => {
        const { name, phone, shift, employeeCreate, navigation } = this.props
        employeeCreate(
            {name, phone, shift: shift || 'Monday'}, 
            () => navigation.goBack()
        )
    }
    render(){
        return(
            <Card>
                <EmployForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
            
        )
    }
}
const mapStateToProps = state => {
    const { name, phone, shift } = state.employForm
    return { name, phone, shift }
}
export default connect(mapStateToProps, { employeeCreate })(EmployCreate)