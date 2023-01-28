import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
function UpperRight() {
    return(
        <a href="something2.0" className="right-upper">
            <div>
                <img alt="timer" src={require('../logo/logo2.0.jpeg')} />
            </div>
            <div className="introduction">
                <div className='intro-part1'>Introducing Monik-Blog ✨ </div>
                <div className='intro-part2'>A copy of the blogging website Hashnode with react</div>

            </div>

            <div className='arrow-icon'>
                <KeyboardArrowRightOutlinedIcon fontSize="large" />
            </div>
        </a>
    );
}

export  default UpperRight;