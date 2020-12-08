import React, {useState, useContext} from "react";
import {Context} from "../App";

function Employee(props){

    const value = useContext(Context);

    const [employee, setEmployee] = useState({
        id: props.id,
        firstName: props.firstName,
        lastName: props.lastName,
        isSelected: props.isSelected
    });

    function changeSelected(){
        setEmployee(prev => {
            return {
                ...prev,
                isSelected: !employee.isSelected
            }
        })
        value.setEmployees(prev => {
            prev.find(element => element.id === employee.id).isSelected = !prev.find(element => element.id === employee.id).isSelected;
            window.sessionStorage.setItem('0', JSON.stringify(prev));
            return prev;
        })
        value.setSelectedEmployees(value.employees.filter((element) => element.isSelected));
    }

    return (
        <div className="inline">
            {employee.lastName + ' ' + employee.firstName}
            <input type="checkbox" checked={employee.isSelected} onChange={changeSelected}></input>
        </div>
    )
}

export default Employee;