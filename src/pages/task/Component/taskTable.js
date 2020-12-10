import React, { useState } from "react";
import "../Style/style.css";
import Modal from "react-modal";
import AddNewTask from "./addNewTask/addNewTask";

Modal.setAppElement("#root");
const Tasktable = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const taskData = [];
  // const taskData = [
  //   {
  //     id: 1,
  //     taskName: "ABC",
  //     taskAssignee: "DEF",
  //     taskAssigner: "GHI",
  //     taskCreationDate: "04-09-2020",
  //     taskDeadlineDate: "09-09-2020",
  //     taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
  //   },
  //   {
  //     id: 2,
  //     taskName: "ABC",
  //     taskAssignee: "DEF",
  //     taskAssigner: "GHI",
  //     taskCreationDate: "04-09-2020",
  //     taskDeadlineDate: "09-09-2020",
  //     taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
  //   },
  //   {
  //     id: 3,
  //     taskName: "ABC",
  //     taskAssignee: "DEF",
  //     taskAssigner: "GHI",
  //     taskCreationDate: "04-09-2020",
  //     taskDeadlineDate: "09-09-2020",
  //     taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
  //   },
  //   {
  //     id: 4,
  //     taskName: "ABC",
  //     taskAssignee: "DEF",
  //     taskAssigner: "GHI",
  //     taskCreationDate: "04-09-2020",
  //     taskDeadlineDate: "09-09-2020",
  //     taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
  //   },
  //   {
  //     id: 5,
  //     taskName: "ABC",
  //     taskAssignee: "DEF",
  //     taskAssigner: "GHI",
  //     taskCreationDate: "04-09-2020",
  //     taskDeadlineDate: "09-09-2020",
  //     taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
  //   },
  //   {
  //     id: 6,
  //     taskName: "ABC",
  //     taskAssignee: "DEF",
  //     taskAssigner: "GHI",
  //     taskCreationDate: "04-09-2020",
  //     taskDeadlineDate: "09-09-2020",
  //     taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
  //   },
  //   {
  //     id: 7,
  //     taskName: "ABC",
  //     taskAssignee: "DEF",
  //     taskAssigner: "GHI",
  //     taskCreationDate: "04-09-2020",
  //     taskDeadlineDate: "09-09-2020",
  //     taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
  //   },
  //   {
  //     id: 8,
  //     taskName: "ABC",
  //     taskAssignee: "DEF",
  //     taskAssigner: "GHI",
  //     taskCreationDate: "04-09-2020",
  //     taskDeadlineDate: "09-09-2020",
  //     taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
  //   },
  //   {
  //     id: 9,
  //     taskName: "ABC",
  //     taskAssignee: "DEF",
  //     taskAssigner: "GHI",
  //     taskCreationDate: "04-09-2020",
  //     taskDeadlineDate: "09-09-2020",
  //     taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
  //   },
  //   {
  //     id:10,
  //     taskName: "ABC",
  //     taskAssignee: "DEF",
  //     taskAssigner: "GHI",
  //     taskCreationDate: "04-09-2020",
  //     taskDeadlineDate: "09-09-2020",
  //     taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
  //   },
  // ];

  return (
    <div className="task_main_div">
      <button
        onClick={() => setModalIsOpen(true)}
        className="addUserModal_button"
      >
        + Add new task
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
        <AddNewTask arrayDetails={taskData} />
      </Modal>

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
          {taskData.map((item) => {
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
    </div>
  );
};

export default Tasktable;
