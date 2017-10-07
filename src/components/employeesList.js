import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, Text } from 'react-native'
import { Button } from './common'
import EmployeeListItem from './employeeListItem'
import { employeesFetch } from '../actions'
import { Entypo } from '@expo/vector-icons'
class EmployeesList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <Button onPress={() => navigation.navigate('EmployCreate')}>
                    <Entypo name='plus' color='white' size={20}/>
                </Button>
            )
        }
    }
    componentWillMount(){
        this.props.employeesFetch()
        this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }
    createDataSource({ employees }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2 
        })
        this.dataSource = ds.cloneWithRows(employees)
    }
    renderRow = employee => {
        return <EmployeeListItem employee={employee} navigation={this.props.navigation}/>
    }
    render(){
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}
const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    })
    return { employees }
}
export default connect(mapStateToProps, { employeesFetch })(EmployeesList)