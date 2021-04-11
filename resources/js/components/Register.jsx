import React, { useState } from "react";

export default function () {
    const [state, setState] = useState({
        name: "",
        email: "",
        phone:"",
        password: "",
    });
    const [error, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        // confirmPassword:"",
    });
    const [passwordShown, setPasswordShown] = useState(false);
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
        console.log(state);
        
// if(state.password===state.confirmPassword){
   

         
        axios.post("/api/register", state).then((res) => {
            if (res.data.status === "success") {
                console.log("success");
            } else {
                setErrors(...res.data);
            }
        })
        // else{
        //     alert("dont match");
        // };
    };
   const togglePasVisible=()=>{
    setPasswordShown(passwordShown ? false : true);
};

   

    return (
        <div className="container w-50 my-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <h3 className="card-header"> REGISTER</h3>
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
                                        We'll never share your email with anyone
                                        else.
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">
                                       Telephone Number
                                    </label>
                                <input
                                type="tel"
                                className="form-control"
                                id="phone" 
                                name="phone"
                                 placeholder="555-555-555" 
                                 pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                                 onChange={handlechange}

                                />
                                    </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">
                                        Password
                                    </label>
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        name="password"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        onChange={handlechange}
                                    />
                                      <small
                                        id="passwordHelp"
                                        className="form-text text-muted"
                                    >
                                       Must contain at least one number and one uppercase letter, and at least 8 or more characters
                                    </small>
                                </div>
                                 <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">
                                       Repeat Password
                                    </label>
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        name="repeatPassword"
                                        pattern={state.password}
                                        onChange={handlechange}
                                    />
                                </div>
                               <div> 
                                   <input type="checkbox"
                                    onClick={togglePasVisible}
                        
                                   /> 
                                   Show Password
                                    </div>
                                
                                 

                                <div className="card-foot">
                                    <button className="btn btn-block btn-success">
                                        {" "}
                                        Register Me
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

