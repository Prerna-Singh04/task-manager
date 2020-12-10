import React from "react";
import '../Style/style.css'


const Tasktable = () => {
  const taskData = [
    {
      id: 1,
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      id: 2,
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      id: 3,
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      id: 4,
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      id: 5,
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      id: 6,
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      id: 7,
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      id: 7,
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      id: 8,
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      id: 9,
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    }
  ];

  return (
    <table className="task-table">
      <tr className="table-column">
        <th>Task Name</th>
        <th>Task Assignee</th>
        <th>Task Assigner</th>
        <th>Task Creation Date</th>
        <th>Task Deadline Date</th>
        <th>Task Description</th>
      </tr>
      {taskData.map((item) => {
        return (
          <tr>
            <td>{item.taskName}</td>
            <td>{item.taskAssignee}</td>
            <td>{item.taskAssigner}</td>
            <td>{item.taskCreationDate}</td>
            <td>{item.taskDeadlineDate}</td>
            <td>{item.taskDescription}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Tasktable;
