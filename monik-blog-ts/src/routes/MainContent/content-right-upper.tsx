import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import blogs from '../../const/blogs';
import { Link } from 'react-router-dom';

function UpperRight() {
    return(
        <Link  to={`/blog/${blogs[0].id}`} className="right-upper">
            <div className='logo-RU'>
                <img alt="timer" src={require('./logo/logo2.0.jpeg')} />
            </div>
            <div className="introduction">
                <div className='intro-part1'>{blogs[0].name} ✨</div>
                <div className='intro-part2'>{blogs[0].content} ....</div>

            </div>

            <div className='arrow-icon'>
                <KeyboardArrowRightOutlinedIcon fontSize="large" />
            </div>
        </Link>
    );
}

export  default UpperRight;