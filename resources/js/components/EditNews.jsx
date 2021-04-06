import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
export default function () {
    const fields = {
        title: "",
        description: "",
        lDescription: "",
        image: "",
        images:[],
    };
    const history = useHistory();

    const [news, setNews] = useState(fields);
    const [oldImages, setOldImages]=useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get("/api/admin/news/edit/" + id).then((res) => {
            if (res.data.status === "success") {
             setNews({ ...fields, ...res.data.news ,images:[]});
                setOldImages(res.data.news.images);
            }
        });
    }, []);
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setNews({
            ...news,
            [name]: value,
        });
        console.log(name, value);
    };
   
    const fileHandleChange = (event) => {
        setNews({ ...news, image: event.target.files[0] });
    };
    const multipleChangeHandler = (e) => {
        setNews({ ...news, images: [...e.target.files] });
    };
console.log(news);
const handlesubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    let images = news.images;
    data.append("_method", "PUT");
    Object.keys(news).map((key) =>
        data.append(
            key,
            key === "image" ? news[key] : JSON.stringify(news[key])
        )
    );
    for (let i = 0; i < images.length; i++) {
        data.append("images[" + i + "]", images[i]);
    }

    axios.post("/api/admin/news/update/" + id, data).then((res) => {
        if (res.data.status === "success") {
            history.push("/admin/news");
        }
    });
};
const deleteImage = (id) => {
        
    axios.delete("/api/admin/news/deleteImage/" + id).then((res) => {
        
        console.log(res);
        console.log(res.data);
        if (res.data.status === "success") {
        const  filtered = oldImages.filter((item) => item.id !== id);
        setOldImages(filtered );
        }
    });
};
    return (
        <div className="container w-50 my-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <h3 className="card-header"> Edit News</h3>
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
                                        value={news.title}
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
                                        value={news.description}
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
                                        value={news.lDescription}
                                        onChange={handlechange}
                                    ></textarea>
                                </div>

                                <div>
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={fileHandleChange}
                                    />
                                    {news?.image &&
                                        typeof news.image === "string" && (
                                            <img
                                                src={news["image"]}
                                                width="100px"
                                                height="100px"
                                            />
                                        )}
                                    {/* <img src={news["image"]}  width='100px' height='100px'/> */}
                                </div>
                                  <div>
                                    
                                            {oldImages?.map((data) => (
                                               <li key={data.id}> <img 

                                                    src={data.images}
                                                    width="100px"
                                                    height="100px"
                                                    
                                                />
                                                <button  onClick={()=>deleteImage(data.id)} className="btn btn-block btn-success"> Delete</button>
                                                </li>
                                                 
                                            ))}
                                    </div>
                                    
                                    <div>
                                    <input
                                        type="file"
                                        name="images"
                                        onChange={multipleChangeHandler}
                                        multiple
                                    />
                                </div> 

                                <div className="card-foot">
                                    <button className="btn btn-block btn-success">
                                        UPDATE
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
