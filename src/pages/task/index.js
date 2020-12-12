import React from "react";
import "./style/style.css";
import LoginProtector from "../../common/components/LoginProtector";
import Tasktable from "./components/taskTable";
import Header from "../../common/components/header";

class Task extends React.Component {
  render() {
    return (
      <div className="task-page">
        <div className="header-section">
          <Header redirectUrl="/users" name="User"/>
        </div>
        <div className="task-section">
          <Tasktable />
        </div>
      </div>
    );
  }
}

export default LoginProtector(Task);
