import { data } from "jquery";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function () {
    const history=useHistory();
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get("/api/admin/news").then((res) => {
            if (res.data.status === "success") {
                setNews(res.data.news);
                console.log(news);
            }
        });
    }, []);
    const deleteNews = (id) => {
        
        axios.delete("/api/admin/news/delete/" + id).then((res) => {
            
            console.log(res);
            console.log(res.data);

            const  filtered = news.filter((item) => item.id !== id);
            setNews(filtered );
        });
    };
    const editNews = (id) => {
     
            history.push('/admin/news/edit/'+id);

        }
  
    return (
      
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {news.map((data, index) => (
                    <tr key={index}>
                        <th scope="col">{data["id"]}</th>
                        <th scope="col">{data["title"]}</th>
                        <th scope="col">{data["description"]}</th>
                        <th scope="col"><img src={data["image"]}  width='100px' height='100px'/></th>
                        <th scope="col"> <button onClick={()=>editNews(data.id)} className="btn btn-block btn-success">
                                       
                                        EDIT
                                    </button></th>
                <th scope="col"> <button onClick={()=>deleteNews(data.id)} className="btn btn-block btn-success">
                                        
                                    DELETE
                                    </button></th>
                    </tr>
                ))}
            </tbody>
        </table>
        
    );
}
