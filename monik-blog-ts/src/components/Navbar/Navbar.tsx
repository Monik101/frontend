import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import blogs from "../../const/blogs";
import React,{ useState, ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { Link,  useNavigate, useParams } from 'react-router-dom';


function Navbar() {
    const { searchid } = useParams();

    const [curr, setcurr] = useState(searchid || "");


    const navigate = useNavigate()
    
    function change(e: ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        setcurr(e.target.value);

    }


    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          navigate(`/search/${curr}`)
          
        }
      };
    

    // const menuHandle = () =>{
    //     alert("WAS CLICKED");
    //     const menuW = Array.from(document.getElementsByClassName("searchdiv") as HTMLCollectionOf<HTMLElement>)
    //     menuW.forEach((element) => {
    //         element.style.display ='block';
    //     });

    // }

    function menuHandle(){
        console.log("HEY");
        alert("HII")
    }    

    return (
        <header className="navbar">
            

            <div className='Navmenu'>
                
                <button className='menubutton' onClick={menuHandle}><MenuIcon/></button>
            </div>

            <div className='titleofpage'>
                <img alt="timer" src={require('./logo/download.jpg')} />
                <span className='monik-blog'><b>MonikBlog</b></span>
            </div>

            <div className='searchdiv'>
                <form className='search'>
                    <div>
                        <span><SearchIcon /></span>
                        <input type="text" placeholder="Search for tags, skills and many more" value={curr} onChange={change} onKeyDown={handleKeyDown} />
                        <span className='slash'>
                            <span>/</span>
                        </span>
                    </div>
    
                </form>
            </div>

            <div className='writediv'>
                <a href='#writesomething' className='writebox'>
                    <span><CreateIcon style={{ color: 'white', fontSize: '1rem', fontWeight: 'lighter' }} /></span>
                    <span className='write'>Write</span>
                </a>
                <button><ArrowDropDownIcon style={{ color: 'white', fill: 'Highlight' }} /></button>
            </div>

            <div className='navlinksDiv' >
                <Link to='/content'><AccountTreeOutlinedIcon className='iconNavBar' /></Link>
                <a href="#contact" className='navbar-right-icons'><DarkModeOutlinedIcon className='iconNavBar' /></a>
                <Link to='/Profile'><AccountCircleIcon className='iconNavBarLast'  /></Link>
            </div>

        </header>

    );

}

export default Navbar;