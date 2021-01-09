import React from "react";

function BDayEmployee(props){

    let mounths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date(props.dob);


    return (
        <div className="inline">
            {props.lastName + ' ' + props.firstName + " - " + date.getDate() + " " + mounths[date.getMonth()] + ", " + date.getFullYear() + " year"}
        </div>
    )
}

export default BDayEmployee;