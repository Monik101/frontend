import React from "react";
import blogs from "../../const/blogs";

import { useParams } from "react-router-dom";

export default function Blog(){
    const { blogid } = useParams();
    const currBlog = blogs.find(val => val.id === blogid);
    if (!currBlog){
        return (
            <div>
                BLog does not exist
            </div>
        );
    
    }
    
    return(
        <div className="blog">
            <h1 className="skillHeading"> {currBlog.name}</h1>
            <hr />
            <div className="detaildiv" >{currBlog.content}</div>
        </div>
    );
}