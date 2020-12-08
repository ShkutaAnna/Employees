import React, {useState, useContext} from "react";
import {Context} from "../App";

function BDayEmployee(props){

    const value = useContext(Context);

    const [employee, setEmployee] = useState({
        id: props.id,
        firstName: props.firstName,
        lastName: props.lastName,
        bdate: props.bdate
    });

    let mounths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date(employee.bdate);


    return (
        <div className="inline">
            {employee.lastName + ' ' + employee.firstName + " - " + date.getDate() + " " + mounths[date.getMonth()] + ", " + date.getFullYear() + " year"}
        </div>
    )
}

export default BDayEmployee;