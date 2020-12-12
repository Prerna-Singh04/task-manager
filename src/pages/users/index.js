import React, { useState } from "react";
import "./Style/index.css";
import Header from "../../common/components/header";
import Modal from "react-modal";
import AddUser from "./components/addNewUser";
import LoginProtector from '../../common/components/LoginProtector';

Modal.setAppElement("#root");
const Users = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const usersData = JSON.parse(localStorage.getItem("users")) || [];
  console.log(usersData);
  return (
    <div className="user_main_div">
      <Header redirectUrl="/task" name="Tasks" />
      <div className="newUser_button">
        <button
          onClick={() => setModalIsOpen(true)}
          className="addUserModal_button"
        >
          + Add new user
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="addUserModal_close">
          <button
            className="addUserModal_close_button"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
        </div>
        <AddUser />
      </Modal>
      <table className="task-table">
        <thead className="user_table_head">
          <tr  className="table-column">
            <th>First Name</th>
            <th>last Name</th>
            <th>userName</th>
          </tr>
        </thead>
        <tbody>
          {usersData &&
            usersData instanceof Array &&
            usersData.map((item) => {
              return (
                <tr key={item.userName}  className="table-column">
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.userName}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default LoginProtector(Users);
