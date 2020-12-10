import React from 'react';
import Header from '../../common/components/header'

const Users = () => {
    const usersData = JSON.parse(localStorage.getItem("users"));
    return <>
        <Header redirectUrl="/task" name="tasks"/> 
        <table className="task-table">
        <tr className="table-column">
            <th>First Name</th>
            <th>last Name</th>
            <th>userName</th>
        </tr>
        {usersData.map((item) => {
            return (
            <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.userName}</td>
            </tr>
            );
        })}
        </table>
    </>
}

export default Users;