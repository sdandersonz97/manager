import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { employeeUpdate } from '../actions'
class EmployForm extends Component {
    render() {
        const { employeeUpdate, name, phone } = this.props
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
                        values={phone}
                        onChangeText={value => employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>
                <CardSection>

                </CardSection>
                <CardSection>
                    <Button>Create</Button>
                </CardSection>
            </Card>
        )
    }
}
const mapStateToProps = state => {
    const { name, phone, shift } = state.employForm
    return { name, phone, shift }
}
export default connect(mapStateToProps, { employeeUpdate })(EmployForm)