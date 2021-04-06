import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

export default function () {
    const fields = { email: "", name: "" };
    const history=useHistory();

    const [user, setUser] = useState(fields);
    const { id } = useParams();
    useEffect(() => {
        axios.get("/api/admin/user/edit/" + id).then((res) => {
            if (res.data.status === "success") {
                setUser({ ...fields, ...res.data.user });
            }
        });
    }, []);

    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.put("/api/admin/users/update/"+id, user).then(res=>{
            if(res.data.status==="success"){
                history.push("/admin/users");

            }
        })
    }  



    return (
        <div className="container w-50 my-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <h3 className="card-header"> UPDATE</h3>
                        <div className="card-body">
                            <form onSubmit={handlesubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter name"
                                        name="name"
                                        value={user.name}
                                        onChange={handlechange}
                                    />
                                    <small
                                        id="emailHelp"
                                        className="form-text text-muted"
                                    ></small>
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
                                        value={user.email}
                                        onChange={handlechange}
                                    />
                                    <small
                                        id="emailHelp"
                                        className="form-text text-muted"
                                    ></small>
                                </div>

                                <div className="card-foot">
                                    <button className="btn btn-block btn-success">
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
