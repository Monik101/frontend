import Chatbox from "./chatbox";
import ContentRight from "./content-right";
import Side from "./side";



function Content(){
    return(
        <div className="content-area">
            <div className="content-area-inner">
                <Side/>
                <ContentRight/>
            </div>
            <div><Chatbox/></div>
        </div>

    );
}

export default Content