import React, { useState, useEffect } from "react";


export default function () {
   
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    useEffect(() => {
        axios.get("/api/admin").then((res) => {
            if (res.data.status === "success") {
                setUsers(res.data.users);
                console.log(users);
            }
        });
    }, [])

    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
       
        setState({
            ...state,
            [name]: value,
        });
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("/api/login",state);
    
 ;

      
    };

    return (
        <div className="container w-50 my-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <h3 className="card-header"> UPDATE</h3>
                        <div className="card-body">
                            <form onSubmit={handlesubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter name"
                                        name="name"
                                        onChange={handlechange}
                                    />
                                    <small
                                        id="emailHelp"
                                        className="form-text text-muted"
                                    >
                                        
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={handlechange}
                                    />
                                    <small
                                        id="emailHelp"
                                        className="form-text text-muted"
                                    >
                                
                                    </small>
                                </div>

                                <div className="card-foot">
                                    <button className="btn btn-block btn-success">
                                        {" "}
                                        Update
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
