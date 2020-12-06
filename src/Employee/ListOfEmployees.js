import React from "react";
import PropTypes from "prop-types";
import Employee from './Employee';

class ListOfEmployees extends React.Component {
    render() {
        const {list, letter} = this.props;
        return (
            <div className="listOfEmployees">
                <h3>{letter}</h3>
                { 
                (list.length > 0) 
                ? list.map((employee) => {
                    return (<Employee
                    key={employee.key}
                    firstName={employee.firstName}
                    lastName={employee.lastName}
                    isSelected={employee.isSelected}
                    />);
                }) : <span>____________</span>
                }
            </div>
        )
    }
}

ListOfEmployees.propTypes = {
    list: PropTypes.array,
    letter: PropTypes.string
};

export default ListOfEmployees;