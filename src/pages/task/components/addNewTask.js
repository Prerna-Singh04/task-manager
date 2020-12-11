import React from "react";
import "../Style/addNewTask.css"

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.arrayDetails,
      taskName: "",
      taskAssignee: "",
      taskAssigner: "",
      taskCreationDate: "",
      taskDeadlineDate: "",
      taskDescription: "",
      successMessage: null,
      errorMessage: null,
    };
    console.log("data is ", this.state.data);
  }
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
      taskCreationDate,
      taskDeadlineDate,
      taskDescription,
    } = this.state;
    if (
     
      taskName &&
      taskAssignee &&
      taskAssigner &&
      taskCreationDate &&
      taskDeadlineDate &&
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
    const taskData = {
      taskName,
      taskAssignee,
      taskAssigner,
      taskCreationDate,
      taskDeadlineDate,
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
    // redirect to login after successful register
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
          <label className="task_label">Task Creation Date*</label>
          <input
            className="task_input"
            type="text"
            name="taskCreationDate"
            value={stateData.taskCreationDate}
            onChange={this.handleChange}
          />
          <label className="task_label">Task Deadline Date*</label>
          <input
            className="task_input"
            type="text"
            name="taskDeadlineDate"
            value={stateData.taskDeadlineDate}
            onChange={this.handleChange}
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
            Add
          </button>
        </div>
      </div>
    );
  }
}
export default AddNewTask;
