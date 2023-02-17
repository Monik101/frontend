
import Initials from "./Pofile/Initials";
import ContentArea from './Pofile/Content';
import * as s from './style'

function Profile(){
    return(
        <s.ProfileSection>
            <Initials/>
            <ContentArea/>
        </s.ProfileSection>
    );
}

export default Profile;