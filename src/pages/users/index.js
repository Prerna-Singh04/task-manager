import React, { useState } from "react";
import "./Style/index.css";
import Header from "../../common/components/header";
import Modal from "react-modal";
import AddUser from "./components/addNewUser";
Modal.setAppElement("#root");
const Users = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const usersData = JSON.parse(localStorage.getItem("users"));
  console.log(usersData);
  return (
    <div className="user_main_div">
      <Header redirectUrl="/task" name="Tasks" />
      <button
        onClick={() => setModalIsOpen(true)}
        className="addUserModal_button"
      >
        + Add new user
      </button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div>
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
        <thead>
          <tr className="table-column">
            <th>First Name</th>
            <th>last Name</th>
            <th>userName</th>
          </tr>
        </thead>
        <tbody>
          {usersData && usersData.map((item) => {
            return (
              <tr key={item.userName}>
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

export default Users;
