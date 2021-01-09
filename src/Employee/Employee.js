import React from "react";
import './Employee.css';

function Employee(props){
    return (
        <div className="inline Employee">
            {props.lastName + ' ' + props.firstName}
            <input type="checkbox" checked={props.isSelected} onChange={() => props.changeSelected(props.id)}></input>
        </div>
    )
}

export default Employee;