import React from "react";
import "../style/addNewTask.css"
import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.arrayDetails,
      taskName: "",
      taskAssignee: "",
      taskAssigner: "",
      taskCreationDate: new Date(),
      taskDeadlineDate: "",
      taskDescription: "",
      successMessage: null,
      errorMessage: null,
      deadlineDate: new Date(),
    };
    console.log("data is ", this.state.data);
  }
  formatDate = (date) => moment(date).format('DD MMM YYYY hh:mm a');
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  validation = () => {
    const {
      taskName,
      taskAssignee,
      taskAssigner,
      taskDescription,
    } = this.state;
    if (
     
      taskName &&
      taskAssignee &&
      taskAssigner &&
      taskDescription
    ) {
      return true;
    } else {
      this.setState({ errorMessage: "Please enter all required fields." });
    }
    setTimeout(() => {
      this.setState({ errorMessage: null });
    }, 2000);
    return false;
  };

  saveChange = () => {
    const isTaskFieldValid = this.validation();
    // const isExistingTask = this.checkExistingTask();

    if (isTaskFieldValid) {
      this.updateUserDB();
    }
  };

  checkExistingTask = () => {
    const { taskName } = this.state;
    const ExistingTask = JSON.parse(localStorage.getItem("tasks"));

    if (!ExistingTask) {
      return true;
    }

    for (let i = 0; i < ExistingTask.length; i++) {
      const task = ExistingTask[i];
      if (taskName === task.taskName) {
        this.setState({ errorMessage: "Task already exist." });
        setTimeout(() => {
          this.setState({ errorMessage: null });
        }, 2000);
        return false;
      }
    }
    return true;
  };

  updateUserDB = () => {
    const ExistingTasks = JSON.parse(localStorage.getItem("tasks"));
    const {
      taskName,
      taskAssignee,
      taskAssigner,
      taskCreationDate,
      taskDeadlineDate,
      taskDescription,
    } = this.state;
    const taskCreationTime = this.formatDate(taskCreationDate);
    const taskDeadline = this.formatDate(taskDeadlineDate);
    const taskData = {
      taskName,
      taskAssignee,
      taskAssigner,
      taskCreationDate: taskCreationTime,
      taskDeadlineDate: taskDeadline,
      taskDescription,
    };
    if (ExistingTasks && ExistingTasks instanceof Array) {
      ExistingTasks.push(taskData);
      localStorage.setItem("tasks", JSON.stringify(ExistingTasks));
    } else {
      const task = [taskData];
      localStorage.setItem("tasks", JSON.stringify(task));
    }
    this.setState({ successMessage: "Task created Successfully" });
    // redirect to task after successful register
    setTimeout(() => {
      this.setState({ successMessage: null });
      window.location.href = window.location.protocol + "/task";
    }, 100);
  };

  render() {
    const stateData = this.state;
    return (
      <div className="addNewTask_main_div">
        <div className="task_fields">
          <h5>Add new task</h5>
          {stateData.errorMessage ? (
            <p className="danger text-center">{stateData.errorMessage}</p>
          ) : null}
          {stateData.successMessage ? (
            <p className="success text-center">{stateData.successMessage}</p>
          ) : null}
         

          <label className="task_label">Task Name*</label>
          <input
            className="task_input"
            type="text"
            name="taskName"
            value={stateData.taskName}
            onChange={this.handleChange}
          />
          <label className="task_label">Task Assignee*</label>
          <input
            className="task_input"
            type="text"
            name="taskAssignee"
            value={stateData.taskAssignee}
            onChange={this.handleChange}
          />
          <label className="task_label">Task Assigner*</label>
          <input
            className="task_input"
            type="text"
            name="taskAssigner"
            value={stateData.taskAssigner}
            onChange={this.handleChange}
          />
          <label className="task_label">Task Deadline Date*</label>
          <DatePicker className="task_input" 
            selected={stateData.deadlineDate} 
            onChange={date => {
              const isoDate = moment(date, 'ddd MMM DD YYYY HH:mm:ss GMT+-HH:mm').format('DD MMM YYYY hh:mm a');
              console.log('isoDate is ===>', isoDate);
              this.setState({ taskDeadlineDate: isoDate})
            }} 
          />
          <label className="task_label">Task Description*</label>
          <input
            className="task_input"
            type="text"
            name="taskDescription"
            value={stateData.taskDescription}
            onChange={this.handleChange}
          />
          <button onClick={this.saveChange} className="submit_button">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default AddNewTask;
