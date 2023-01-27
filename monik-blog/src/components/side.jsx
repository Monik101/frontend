import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import SettingsEthernetOutlinedIcon from '@mui/icons-material/SettingsEthernetOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DiscFullIcon from '@mui/icons-material/DiscFull';

function Sidelist(props) {
    return (
    <a href="gibris" className='menu-feed'> 
        <div className='menu-feed-icon'>{props.icon} </div>
        <div><b>{props.name} </b></div>
    </a>
    );
  }


function Trending(props){
    return (
        <a href='something' className='trendings'>
            <div>{props.name}</div>
            <div className='title'>{props.title}</div>
        </a>
    )
}


  
function Side() {
    return (
        <div className='side-feed'>
            <div className='side-list-1'>
                <Sidelist name="My Feed" icon= <FeedOutlinedIcon/> />
                <Sidelist name="Explore" icon= <ExploreOutlinedIcon/> />
                <Sidelist name="Drafts" icon= <SaveAsOutlinedIcon/> />
                <Sidelist name="Bookmarks"icon= <BookmarksOutlinedIcon/> />
                <Sidelist name="Hackahons" icon= <SettingsEthernetOutlinedIcon/> />
                <Sidelist name="More" icon= <KeyboardDoubleArrowRightOutlinedIcon/> />

            </div>
            <hr/>
            <div className='side-list-2'>
                <div className='trending-title'>
                    <div><h3>Trending Tags</h3> </div>
                    <div><TrendingUpOutlinedIcon color="disabled"/></div>
                </div>
                <Trending name="HTML" title="+437"/>
                <Trending name="JAVASCRIPT" title="+337"/>
                <Trending name="CSS" title="+137"/>
                <Trending name="PYTHON" title="+37"/>
                <Trending name="DJANGO" title="+13"/>
                <Trending name="See all" title=<KeyboardArrowRightOutlinedIcon/> />
            </div>

            <hr/>

            <div className='socialmedia'>
                <InstagramIcon/>
                <TwitterIcon/>
                <LinkedInIcon/>
                <DiscFullIcon/>
            </div>


        </div>
        );
  }

  export default Side;