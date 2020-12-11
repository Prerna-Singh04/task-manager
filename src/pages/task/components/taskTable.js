import React, { useState } from "react";
import "../Style/style.css";
import Modal from "react-modal";
import AddNewTask from "./addNewTask";

Modal.setAppElement("#root");
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

const Tasktable = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const ExistingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(ExistingTasks)
  return (
    <div className="task_main_div">
      <div className="add-task-btn-container">
        <button
          onClick={() => setModalIsOpen(true)}
        >
          + Add new task
        </button>
      </div>
      <table className="task-table">
        <thead>
          <tr className="table-column">
            <th>Task Name</th>
            <th>Task Assignee</th>
            <th>Task Assigner</th>
            <th>Task Creation Date</th>
            <th>Task Deadline Date</th>
            <th>Task Description</th>
          </tr>
        </thead>
        <tbody>
          {ExistingTasks && ExistingTasks instanceof Array && ExistingTasks.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.taskName}</td>
                <td>{item.taskAssignee}</td>
                <td>{item.taskAssigner}</td>
                <td>{item.taskCreationDate}</td>
                <td>{item.taskDeadlineDate}</td>
                <td>{item.taskDescription}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Modal to add new task */}
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div>
          <button
            className="addUserModal_close_button"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
        </div>
        <AddNewTask />
      </Modal>
    </div>
  );
};

export default Tasktable;
