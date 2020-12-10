import React from "react";
import "./style/addNewTask.css";

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:this.props.arrayDetails,
      taskid: "",
      taskName: "",
      taskAssignee: "",
      taskAssigner: "",
      taskCreationDate: "",
      taskDeadlineDate: "",
      taskDescription: "",
      successMessage: null,
      errorMessage: null,
    };
    console.log("data is ",this.state.data)
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  validation = () => {
    const {taskid,
      taskName,
      taskAssignee,
      taskAssigner,
      taskCreationDate,
      taskDeadlineDate,
      taskDescription,
    } = this.state;
    if (taskid&&
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

  saveChange=()=>{
    const isTaskFieldValid = this.validation();
   // const isExistingTask = this.checkExistingTask();

    if(isTaskFieldValid){
      this.updateUserDB()
    }
  }
  

  checkExistingTask = () => {
    const { taskName } = this.state;
    const ExistingTask = JSON.parse(localStorage.getItem("tasks"));

    // if no existing tasks return true
    if (!ExistingTasks) {
      return true;
    }

    // if existing tasks array exists check details
    for (let i = 0; i < ExistingTasks.length; i++) {
      const task = ExistingTasks[i];
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

  // Update user database
  updateUserDB = () => {
    const ExistingTasks = JSON.parse(localStorage.getItem("tasks"));
    const {taskName,
      taskAssignee,
      taskAssigner,
      taskCreationDate,
      taskDeadlineDate,
      taskDescription,} = this.state;
    const taskData = {taskName,
      taskAssignee,
      taskAssigner,
      taskCreationDate,
      taskDeadlineDate,
      taskDescription, };
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
    }, 5000);
  };

  render() {
    const stateData = this.state;
    return (
      <div  className="addNewTask_main_div">
        <div className="task_fields">
          <h5>Add new task</h5>
          {stateData.errorMessage ? (
            <p className="danger text-center">{stateData.errorMessage}</p>
          ) : null}
          {stateData.successMessage ? (
            <p className="success text-center">{stateData.successMessage}</p>
          ) : null}
          <label>Task Id(Unique)</label>
          <input
            type="text"
            name="taskid"
            value={stateData.taskid}
            onChange={this.handleChange}
          />

          <label>Task Name*</label>
          <input
            type="text"
            name="taskName"
            value={stateData.taskName}
            onChange={this.handleChange}
          />
          <label>Task Assignee*</label>
          <input
            type="text"
            name="taskAssignee"
            value={stateData.taskAssignee}
            onChange={this.handleChange}
          />
          <label>Task Assigner*</label>
          <input
            type="text"
            name="taskAssigner"
            value={stateData.taskAssigner}
            onChange={this.handleChange}
          />
          <label>Task Creation Date*</label>
          <input
            type="text"
            name="taskCreationDate"
            value={stateData.taskCreationDate}
            onChange={this.handleChange}
          />
          <label>Task Deadline Date*</label>
          <input
            type="text"
            name="taskDeadlineDate"
            value={stateData.taskDeadlineDate}
            onChange={this.handleChange}
          />
          <label>Task Description*</label>
          <input
            type="text"
            name="taskDescription"
            value={stateData.taskDescription}
            onChange={this.handleChange}
          />
          <button onClick={this.saveChange} className="submit_button">Add</button>
        </div>
      </div>
    );
  }
}
export default AddNewTask;
