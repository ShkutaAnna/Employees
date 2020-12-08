
import React, {useState, useEffect} from 'react';
import './App.css';
import ListOfEmployees from './Employee/ListOfEmployees';
import ListofBDayEmployees from './BirthDayEmployee/ListOfBDayEmployees';

export const Context = React.createContext();



function App(){
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const value = {employees, setEmployees, selectedEmployees, setSelectedEmployees};

  useEffect(() => {
    if(window.sessionStorage.getItem('0') !== null){
      setEmployees(JSON.parse(window.sessionStorage.getItem('0')));
    }else{
      fetch(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
    .then(response => response.json())
    .then(json => {
      json.forEach(element => {
        element.isSelected = false
      });
      json.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));  
      setEmployees(json);
    })
    }
  }, []);

  return (
    <Context.Provider value={value}>
    <div className="Container">
      <div className="LeftBlock">
        <h2>Employees</h2>
        <ListOfEmployees />
      </div>
      <div className="RightBlock">
        <h2>Employees birthday</h2>
        <ListofBDayEmployees />
      </div>
    </div>
    </Context.Provider>
  );
}

export default App;