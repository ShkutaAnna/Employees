import React, {useContext} from "react";
import Employee from './Employee';
import {Context} from "../App";

function ListOfEmployees() {
    let letters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('');
    const value = useContext(Context);

        return (
            <div className="App">
                { 
                    letters.map((letter) => {
                        let list = value.employees.filter((employee) => employee.lastName[0] === letter);
                        return (
                            <div className="listOfEmployees">
                            <h3>{letter}</h3>
                            { 
                                (list.length > 0) 
                                ? list.map((employee) => {
                                    return (<Employee
                                        key={employee.id}
                                        id={employee.id}
                                        firstName={employee.firstName}
                                        lastName={employee.lastName}
                                        isSelected={employee.isSelected}
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