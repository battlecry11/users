import { data } from "jquery";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function () {
    const history=useHistory();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("/api/admin").then((res) => {
            if (res.data.status === "success") {
                setUsers(res.data.users);
                console.log(users);
            }
        });
    }, []);
    const deleteUser = (id) => {
        // console.log("Hello World!");
        axios.delete("/api/admin/delete/" + id).then((res) => {
            console.log(res);
            console.log(res.data);

            const  filtered = users.filter((item) => item.id !== id);
            setUsers(filtered );
        });
    };
    const editUser = (id) => {
     
            history.push('/admin/edit/'+id);
        }

        
    
        

    

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <th scope="col">{user["id"]}</th>
                        <th scope="col">{user["name"]}</th>
                        <th scope="col">{user["email"]}</th>
                        <th scope="col"> <button onClick={()=>editUser(user.id)}className="btn btn-block btn-success">
                                        {" "}
                                        EDIT
                                    </button></th>
                <th scope="col"> <button  onClick={()=>deleteUser(user.id)} className="btn btn-block btn-success">
                                        {" "}
                                    DELETE
                                    </button></th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
