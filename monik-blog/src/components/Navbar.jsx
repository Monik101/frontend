
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Navbar(){
    return(
    <header className="navbar">
        
        <div className='titleofpage'>
            <img alt="timer" src={require('../logo/brand-icon.jpeg')} />
            <span><b>Monik Blog</b></span>
        </div>

        <div>
            <form className='search'>
                <span><SearchIcon  color="disabled"/></span>
                <input type="text" placeholder="Search"/>
            </form>
        </div>

        <div>
            <a href='#writesomething'  className='writebox'>
                <CreateIcon  style={{ color: "white" }}/>
                <span className='write'>Write</span>
            </a>
            <button><ArrowDropDownIcon style={{ color: "white" }}/></button>
        </div>

        <div >
            <a href="#about" className='navbar-right-icons'><AccountTreeIcon fontSize="medium" color="disabled" /></a>
            <a href="#contact" className='navbar-right-icons'><DarkModeIcon fontSize="medium" color="disabled"/></a>
            <a href="#contact" className='navbar-right-icons'><NotificationsIcon fontSize="medium" color="disabled"/></a>
            <a  href="#contact" className='navbar-right-icons'><AccountCircleIcon fontSize="large" color="disabled"/></a>
        </div>

    </header>

    );

}

export default Navbar;