import React, {useContext, useEffect} from "react";
import BDayEmployee from "./BDayEmployee";

function ListOfEmployees(props) {
        
    let mounths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
            <div className="BDaysBlock">
            {
            ((props.employees.filter((element) => element.isSelected)).length > 0) ?
            <div>
            { 
                mounths.map((mounth, index) => {
                  let list = props.employees.filter((element) => element.isSelected).filter((element) => new Date(element.dob).getMonth() === index);
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
                                          dob={employee.dob}
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