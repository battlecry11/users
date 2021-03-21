import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function () {
    const history = useHistory();
    const [state, setState] = useState({
        title: "",
        description: "",
        image: "",
        lDescription:"",
    });
    const [error, setErrors] = useState({
        title: "",
        description: "",
        lDescription:"",
        image: "",
    });

    const [isFilePicked, setIsFilePicked] = useState(false);

    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(value);
        setState({
            ...state,
            [name]: value,
        });
    };

    const changeHandler = (event) => {
        setState({ ...state, image: event.target.files[0] });
        // setSelectedFile(event.target.files[0]);

        setIsFilePicked(true);
        // console.log(state);
        console.log(isFilePicked);
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        let data = new FormData();
        Object.keys(state).map((key) =>
            data.append(
                key,
                key === "image" ? state[key] : JSON.stringify(state[key])
            )
        );
        console.log(state);

        axios.post("/api/admin/addNews", data).then((res) => {
            if (res.data.status === "success") {
                history.push("/admin/news");

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
                            <form onSubmit={handlesubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
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
                                    ></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">
                                       Short Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter description"
                                        name="description"
                                        onChange={handlechange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">
                                        Long Description
                                    </label>
                                    <textarea
                                        className="form-control"
                                        name="lDescription"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        onChange={handlechange}

                                    ></textarea>
                                </div>

                                <div>
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={changeHandler}
                                    />
                                     <input
                                        type="file"
                                        name="image"
                                        onChange={multipleChangeHandler}
                                   multiple />

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
