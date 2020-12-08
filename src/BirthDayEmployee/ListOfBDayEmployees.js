import React, {useContext, useEffect} from "react";
import BDayEmployee from "./BDayEmployee";

import {Context} from "../App";

function ListOfEmployees() {
        
    const value = useContext(Context);
    let mounths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        
    }, value.selectedEmployees);

    return (
            <div className="BDaysBlock">
            {
            ((value.employees.filter((element) => element.isSelected)).length > 0) ?
            <div>
            { 
                mounths.map((mounth, index) => {
                  let list = value.employees.filter((element) => element.isSelected).filter((element) => new Date(element.dob).getMonth() === index);
                  if(list.length > 0){
                    return (
                        <div>
                            <h3>{mounth}</h3>
                            {
                                list.map((employee) => {
                                    return (
                                        <BDayEmployee 
                                          key={employee.id}
                                          id={employee.id}
                                          firstName={employee.firstName}
                                          lastName={employee.lastName}
                                          bdate={employee.dob}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                  }
                  return null;
                })
            } 
            </div>
            : <span>No selected employees</span>
            }
            </div>
    )
}

export default ListOfEmployees;