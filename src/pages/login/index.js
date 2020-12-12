import React from 'react';
import LoginForm from './components/form';
import LoginProtector from '../../common/components/LoginProtector';
import Task from '../task/index'

const  Login  = () =>{
    const loginUserData = localStorage.getItem("logedInUserData")
        return  loginUserData ?<Task />:<LoginForm />
    
};

export default Login;