import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, Text } from 'react-native'
import { Button } from './common'
import EmployeeListItem from './employeeListItem'
import { employeesFetch } from '../actions'
class EmployeesList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <Button onPress={() => navigation.navigate('EmployForm')}> + </Button>
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
    renderRow = employees => {
        console.log(employees)
        return <EmployeeListItem name={employees.name}/>
    }
    render(){
        console.log(this.props.employees)
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