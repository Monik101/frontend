import React from "react";
import * as s from './style';
import blogs from "../../const/blogs";
import { useParams, Link } from "react-router-dom";

function SearchSec(){
    let { searchid=" " } = useParams()!;
    console.log("thisisssss",searchid)
    const currBlogs = blogs.filter(val => val.id.toLowerCase().match(searchid?.toLowerCase()));
    console.log(currBlogs)


    if (currBlogs.length ==0){
        return (
            <s.searchbox>
                BLog does not exist
            </s.searchbox>
        );
    
    }

    return(
        <s.searchbox>
            {currBlogs.map(blogname =><Link className="search-links" to={`/blog/${blogname.id}`}>
                <s.mainSection>

                    <s.mainSectionText>
                        <s.name>
                            {blogname.name} 
                        </s.name>

                        <s.nameContent>
                            {blogname.content} 
                        </s.nameContent>
                    </s.mainSectionText>


                    <s.logodiv>
                        <s.nameLogo src={blogname.imgurl} alt="" />
                    </s.logodiv>

                </s.mainSection>

                <hr />
            
                </Link>)}      
        </s.searchbox>
    );
}

export default SearchSec;