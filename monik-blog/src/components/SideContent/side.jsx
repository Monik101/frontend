import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import blogs from '../../const/blogs';


import { Link } from 'react-router-dom';


function Side() {
    return (
        <div className='side-feed'>
            <div className='side-list-2'>
                <div className='trending-title'>
                    <div><h2>Skills</h2> </div>
                    <div><TrendingUpOutlinedIcon color="disabled" /></div>
                </div>
                {blogs.map(blog => <Link className='trendings' to={`/blog/${blog.id}`}>{blog.name} </Link>)}
            </div>

            <hr />

            <div className='socialmedia'>
                <a className='socialicon1' href="https://instagram.com/monik.malik?igshid=ZDdkNTZiNTM=" target="_blank"><InstagramIcon /></a>
                <a className='socialicon2' href="https://twitter.com/MonikMalik4?t=h4YzM4Z3JbDiC_I0tH1tIg&s=09" target="_blank"><TwitterIcon /></a>
                <a className='socialicon3' href="www.linkedin.com/in/monik-malik" target="_blank"><LinkedInIcon /></a>
            </div>


        </div>
    );
}

export default Side;