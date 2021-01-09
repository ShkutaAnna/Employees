
import React, {Component} from 'react';
import './App.css';
import ListOfEmployees from './Employee/ListOfEmployees';
import ListofBDayEmployees from './BirthDayEmployee/ListOfBDayEmployees';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false, 
      employees: []
    }
  }

  componentDidMount() {
    fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
    .then(res => res.json())
    .then(
      (result) => {
        result.forEach(element => {
          element.isSelected = false
        })
        this.setState({
          isLoaded: true,
          employees: result
        })
      }
    )
  }

  changeSelectedEmployees = (id) => {
    this.setState((prevState) => {
      const employees = prevState.employees.map((o) => {
        if(o.id === id)
          o.isSelected = !o.isSelected
        return o
      })
      return {
        employees
      }
    })
  }

  render() {
    return (
        <div className="Container">
          <div className="LeftBlock">
            <h2>Employees</h2>
            <ListOfEmployees employees={this.state.employees} changeSelected={this.changeSelectedEmployees}/>
          </div>
          <div className="RightBlock">
            <h2>Employees birthday</h2>
            <ListofBDayEmployees employees={this.state.employees}/>
          </div>
        </div>
    )
  } 
}