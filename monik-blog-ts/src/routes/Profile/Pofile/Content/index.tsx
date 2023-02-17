import SideNavBar from "../SideNavigation";
import IntroDiv from "./IntroductionSection";

import * as s from './style'

function ContentArea() {
    return(
        <s.ContentDiv>
            <SideNavBar/>
            <IntroDiv/>
        </s.ContentDiv>
     );
}

export default ContentArea