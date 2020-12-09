import React from "react";
import "./Style/style.css";
import LoginProtector from "../../common/components/LoginProtector";
import Tasktable from "./Component/taskTable";
import Header from "../../common/components/header";

class Task extends React.Component {
  render() {
    return (
      <div>
        <div className="header_task">
        <Header redirectUrl="/users" name="User"/>
        <p style={{textDecoration:"Underline"}}> Task Table</p>
        <Header redirectUrl="/" name="Signout" />
        </div>
        <Tasktable />
      </div>
    );
  }
}

export default LoginProtector(Task);
