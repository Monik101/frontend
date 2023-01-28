import Chatbox from "../Chatbox/chatbox";
import ContentRight from "./content-right";
import Side from "../SideContent/side";



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