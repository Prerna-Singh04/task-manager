import React from "react";
import '../Style/style.css'


const Tasktable = () => {
  const taskData = [
    {
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
      taskName: "ABC",
      taskAssignee: "DEF",
      taskAssigner: "GHI",
      taskCreationDate: "04-09-2020",
      taskDeadlineDate: "09-09-2020",
      taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
    },
    {
        taskName: "ABC",
        taskAssignee: "DEF",
        taskAssigner: "GHI",
        taskCreationDate: "04-09-2020",
        taskDeadlineDate: "09-09-2020",
        taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
      },
      {
        taskName: "ABC",
        taskAssignee: "DEF",
        taskAssigner: "GHI",
        taskCreationDate: "04-09-2020",
        taskDeadlineDate: "09-09-2020",
        taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
      },
      {
        taskName: "ABC",
        taskAssignee: "DEF",
        taskAssigner: "GHI",
        taskCreationDate: "04-09-2020",
        taskDeadlineDate: "09-09-2020",
        taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
      },
      {
        taskName: "ABC",
        taskAssignee: "DEF",
        taskAssigner: "GHI",
        taskCreationDate: "04-09-2020",
        taskDeadlineDate: "09-09-2020",
        taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
      },{
        taskName: "ABC",
        taskAssignee: "DEF",
        taskAssigner: "GHI",
        taskCreationDate: "04-09-2020",
        taskDeadlineDate: "09-09-2020",
        taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
      },{
        taskName: "ABC",
        taskAssignee: "DEF",
        taskAssigner: "GHI",
        taskCreationDate: "04-09-2020",
        taskDeadlineDate: "09-09-2020",
        taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
      },{
        taskName: "ABC",
        taskAssignee: "DEF",
        taskAssigner: "GHI",
        taskCreationDate: "04-09-2020",
        taskDeadlineDate: "09-09-2020",
        taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
      },{
        taskName: "ABC",
        taskAssignee: "DEF",
        taskAssigner: "GHI",
        taskCreationDate: "04-09-2020",
        taskDeadlineDate: "09-09-2020",
        taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
      },{
        taskName: "ABC",
        taskAssignee: "DEF",
        taskAssigner: "GHI",
        taskCreationDate: "04-09-2020",
        taskDeadlineDate: "09-09-2020",
        taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
      },{
        taskName: "ABC",
        taskAssignee: "DEF",
        taskAssigner: "GHI",
        taskCreationDate: "04-09-2020",
        taskDeadlineDate: "09-09-2020",
        taskDescription: "ABC DEF GHI JKL MNO PQR STUVW XYZ .",
      }
  ];

  return (
    <table>
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
