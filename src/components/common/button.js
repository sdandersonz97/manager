import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle} >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        backgroundColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
})
