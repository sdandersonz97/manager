import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged } from '../actions'
import { connect } from 'react-redux'
class LoginForm extends Component {
    onEmailChange = text => {
        this.props.emailChanged(text)
    }
    onPasswordChange = text => {
        this.props.passwordChanged
    }
    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder="email@somenthing.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Password" 
                        secureTextEntry 
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)