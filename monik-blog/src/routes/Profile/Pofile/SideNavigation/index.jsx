import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as s from './style'

function Sidelist(props) {
    return (
        <s.Navigation>
            <div>{props.icon} </div>
            <div>{props.name} </div>
        </s.Navigation>
    );
}

const SIDE_LIST = [{
    name: 'Skill',
    icon: null
}, 
{
    name: "Projects",
    icon: null
}, 
{
    name: "Work",
    icon: null
}, 
{
    name: "Certificates",
    icon: null
},
{
    name: "Contact",
    icon: null
}]


function SideNavBar() {
    return (
        <s.sideNav>
            <s.sideNavFeed1>
                {SIDE_LIST.map(listItem => <Sidelist name={listItem.name} icon={listItem.icon} />)}
            </s.sideNavFeed1>
            <s.LineNav />
            <s.SocialMedia>
                <s.SocialMediaLinks href="https://instagram.com/monik.malik?igshid=ZDdkNTZiNTM=" target="_blank"><InstagramIcon style={{ color: 'white'}} /></s.SocialMediaLinks>
                <s.SocialMediaLinks href="https://twitter.com/MonikMalik4?t=h4YzM4Z3JbDiC_I0tH1tIg&s=09" target="_blank"><TwitterIcon style={{ color: 'white'}}/></s.SocialMediaLinks>
                <s.SocialMediaLinks href="www.linkedin.com/in/monik-malik" target="_blank"><LinkedInIcon style={{ color: 'white'}} /></s.SocialMediaLinks>
            </s.SocialMedia>
        </s.sideNav>
    );
}

export default SideNavBar;
