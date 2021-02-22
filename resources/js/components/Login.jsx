
import React, { useState } from "react";


export default function () {
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const [error, setErrors] = useState({
        email: "",
        password: "",
    });
    const fields = {
        username: "",
        password: ""
    };
    
const handleLogin=(e)=>{
    e.preventDefault();
    console.log('aniii');

    // history.push('/profile');
}
const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setState({
        ...state,
        [name]: value,
    });
    
    
};
        return (
            <div className="container w-50 my-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <h3 className="card-header"> LOGIN</h3>
                            <div className="card-body">
                                <form   onSubmit={handleLogin}>
                                    <div className="form-group" >
                                        <label 
                                        htmlFor="exampleInputEmail1">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            name='email'
                                            onChange={handlechange}
                                        />
                                        <small
                                            id="emailHelp"
                                            className="form-text text-muted"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            name='password'
                                            onChange={handlechange}
                                        />
                                    </div>

                                    <div className="card-foot">
                                        <button className="btn btn-block btn-success">
                                            {" "}
                                            Log Me
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



