import React from "react";
import LoginProtector from "../../common/components/LoginProtector";
import Tasktable from "./Component/taskTable";
import Header from '../../common/components/header'

class Task extends React.Component {
  render() {

    return (<><Header redirectUrl="/users" name="user" /><Tasktable /></>);
  }
}

export default LoginProtector(Task);
