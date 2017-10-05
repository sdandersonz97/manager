import React, { Component } from 'react'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { Text, StyleSheet } from 'react-native'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { connect } from 'react-redux'
class LoginForm extends Component {
    onEmailChange = text => {
        this.props.emailChanged(text)
    }
    onPasswordChange = text => {
        this.props.passwordChanged(text)
    }
    onButtonPress = () => {
        const { email, password, loginUser, navigation } = this.props
        loginUser({ email, password }, () => navigation.navigate(
            'EmployeesList'
        ))
    }
    renderButton = () => {
        return !this.props.loading 
            ?   <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            :   <Spinner />
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
                <Text style={styles.errorStyled}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    errorStyled:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})
const mapStateToProps = ({auth}) => {
    const { email, password, error, loading } = auth
    return {
        email,
        password,
        error,
        loading
    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)