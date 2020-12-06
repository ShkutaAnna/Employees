
import React from 'react';
import './App.css';
import ListOfEmployees from './Employee/ListOfEmployees';
import API from "./utils/API";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }
  }

  render() {
    
    let letters = "";
    for (let i = 65; i < 91; i++) {
      letters += String.fromCharCode(i).toUpperCase();
    }
    letters = letters.split('');

    return (
      <div className="App">
        { 
          letters.map((letter, index) => {
            let list = this.state.employees.filter((employee) => employee.lastName[0] === letter);
            return (<ListOfEmployees 
              key={index}
              letter={letter}
              list={list}
            />);
          })
        }
      </div>
    );
  }

  async componentDidMount() {
    // Load async data.
    let employeesData = await API.get('/');
    employeesData = employeesData.data;
    employeesData.forEach(element => {
      element.isSelected = false
    });
    employeesData.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
    this.setState({
      employees : employeesData
    });
  }
}
export default App;