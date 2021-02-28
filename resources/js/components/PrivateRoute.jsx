import React, {useContext, useEffect} from "react";
import {Redirect, Route, useHistory} from "react-router-dom";


export default function ({component: Component, ...rest}) {

    const user= JSON.parse(localStorage.getItem('user'));
    const history = useHistory();
    axios.interceptors.request.use(function (config) {
        const bearer =user?.apiToken || "";

        config.headers.Authorization = 'Bearer ' + bearer;

        return config;
    });

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if(error.response.status===401) {
            localStorage.removeItem('user');
        } else return Promise.reject(error);
    });
console.log(user);
console.log(user?.apiToken? 1: 0);
    return (
        <Route {...rest}
            render={(props) => user?.apiToken?
               
             <Component {...props} /> : console.log("smth")} />
    )
}
//  <Redirect to='/login' />