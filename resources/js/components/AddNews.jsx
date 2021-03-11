
import React, { useState } from "react";
import {useHistory} from 'react-router-dom';


export default function () {
    const [state, setState] = useState({
        title: "",
        description: "",
       
    });
    
    
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
       
        setState({
            ...state,
            [name]: value,
        });
        console.log(state);
        
    };
    const handlesubmit = (e) => {
        e.preventDefault();

         console.log(state);
        axios.post("/api/admin/addNews", state).then((res) => {
            if (res.data.status === "success") {
                console.log("success");
            } else {
                setErrors(...res.data);
            }
        });
    };
  
        return (
            <div className="container w-50 my-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <h3 className="card-header"> Add News</h3>
                            <div className="card-body">
                                <form  onSubmit={handlesubmit} >
                                    <div className="form-group" >
                                        <label 
                                        htmlFor="exampleInputEmail1">
                                            Title
                                        </label>
                                        <input
                                         type="text"
                                         className="form-control"
                                         placeholder="Enter title"
                                         name="title"
                                         onChange={handlechange}
                                        />
                                        <small
                                            id="emailHelp"
                                            className="form-text text-muted"
                                        >
                                           
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">
                                           Description
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter description"
                                          name="description"
                                          onChange={handlechange}
                                         
                                        />
                                    </div>

                                    <div className="card-foot">
                                        <button className="btn btn-block btn-success">
                                            
                                            ADD
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



