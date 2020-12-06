import React from "react";
import LoginProtector from "../../common/components/LoginProtector";
import Tasktable from "./Component/taskTable";

class Task extends React.Component {
  render() {
    return <Tasktable />;
  }
}

export default LoginProtector(Task);
