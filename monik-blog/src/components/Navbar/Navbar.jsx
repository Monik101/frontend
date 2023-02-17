import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import blogs from "../../const/blogs";
import React,{ useState } from 'react';

import { Link } from 'react-router-dom';



function Navbar() {
    const [curr, setcurr] = useState("");
    
    function change(e){
        e.preventDefault();
        setcurr(e.target.value);

    }

    return (
        <header className="navbar">
            <div className='titleofpage'>
                <img alt="timer" src={require('./logo/download.jpg')} />
                <span><b>Monik Blog</b></span>
            </div>

            <div>
                <form className='search'>
                    <div>
                        <span><SearchIcon /></span>
                        <input type="text" placeholder="Search for tags, skills and many more" value={curr} onChange={change} />
                        <span className='slash'>
                            <span>/</span>
                        </span>
                    </div>
    
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
                <Link to='/content'><AccountTreeOutlinedIcon style={{ color: 'black' }} /></Link>
                <a href="#contact" className='navbar-right-icons'><DarkModeOutlinedIcon style={{ color: 'black' }} /></a>
                <Link to='/Profile'><AccountCircleIcon style={{ color: 'black', fontSize: '2.8rem' }} /></Link>
            </div>

        </header>

    );

}

export default Navbar;