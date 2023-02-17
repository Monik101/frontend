import LowerRight from "./content-right-lower";
import UpperRight from "./content-right-upper";

function ContentRight(){
    return(
        <div className="right-side">
            <UpperRight/>
            <LowerRight/>
        </div>
    );
}

export default ContentRight;