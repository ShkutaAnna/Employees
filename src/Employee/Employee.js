
import React from "react";
import PropTypes from "prop-types";

class Employee extends React.Component {
    render() {
        const {firstName, lastName, isSelected} = this.props;

        return (
            <div className="inline">
                {lastName + ' ' + firstName}
                <input type="checkbox" checked={isSelected} onChange={changeSelected}></input>
            </div>
        )
    }
}

function changeSelected(){
    //TODO
}

Employee.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    isSelected: PropTypes.bool
};

export default Employee;