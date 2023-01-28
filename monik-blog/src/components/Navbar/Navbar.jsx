import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { fontSize } from '@mui/system';



function Navbar() {
    return (
        <header className="navbar">

            <div className='titleofpage'>
                <img alt="timer" src={require('../logo/brand-icon.jpeg')} />
                <span><b>Monik Blog</b></span>
            </div>

            <div>
                <form className='search'>
                    <span><SearchIcon style={{ color: 'black', fontSize: '1.5rem' }} /></span>
                    <input type="text" placeholder="Search" />
                    <span className='slash'>
                        <span>/</span>
                    </span>
                </form>
            </div>

            <div>
                <a href='#writesomething' className='writebox'>
                    <span><CreateIcon style={{ color: 'white', fontSize: '1rem', fontWeight: 'lighter' }} /></span>
                    <span className='write'>Write</span>
                </a>
                <button><ArrowDropDownIcon style={{ color: 'white', fill: 'Highlight' }} /></button>
            </div>

            <div >
                <a href="#about" className='navbar-right-icons'><AccountTreeOutlinedIcon style={{ color: 'black' }} /></a>
                <a href="#contact" className='navbar-right-icons'><DarkModeOutlinedIcon style={{ color: 'black' }} /></a>
                <a href="#contact" className='navbar-right-icons'><NotificationsNoneOutlinedIcon style={{ color: 'black' }} /></a>
                <a href="#contact" className='navbar-right-icons'><AccountCircleIcon style={{ color: 'black', fontSize: '2.6rem', background: 'white' }} /></a>
            </div>

        </header>

    );

}

export default Navbar;