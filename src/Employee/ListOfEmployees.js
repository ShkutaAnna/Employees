import React, {useContext} from "react";
import Employee from './Employee';

function ListOfEmployees(props) {
    let letters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('');

        return (
            <div className="App">
                { 
                    letters.map((letter) => {
                        let list = props.employees.filter((employee) => employee.lastName[0] === letter);
                        return (
                            <div className="ListOfEmployees">
                            <h3>{letter}</h3>
                            { 
                                (list.length > 0) 
                                ? list.map((employee, index) => {
                                    return (<Employee
                                        key={index}
                                        id={employee.id}
                                        firstName={employee.firstName}
                                        lastName={employee.lastName}
                                        isSelected={employee.isSelected}
                                        changeSelected={props.changeSelected}
                                    />);
                                }) : <span>____________</span>
                            }
                            </div>
                        )
                    })
                }
            </div>
        )
}

export default ListOfEmployees;