
import { Link } from 'react-router-dom';
import blogs from '../../const/blogs';

function LowerRight(){
    return(


        <div className="lowerright">
            <div className='maintext-img'>
                <div className='textdiv'>
                    <h1>
                        <span className="maintext">Monik-Blog </span>
                        <span className='maintext2'> A platform for tech writers and readers</span>
                    </h1>
                    <div>
                        <Link className='linkprofile' to='/Profile'>Profile</Link>
                    </div>
                </div>
                <div className='imgdiv'>
                    <img alt="timer" src={require('./logo/contentimage.webp')} width="450" height="450" />

                </div>

            </div>

            <div className='content-semi'>
                <div className='content-semi-part1'>
                    <img className='content-semi-profile' src={require("./logo/blog-fotu.jpg")} alt="photu" />
                </div>
                <div className='content-semi-part2'>
                "You can start a dev blog in just a few seconds using Hashnode 
                and then you can move that to your own domain if you get one later. 
                They will even help distribute your articles on their platform. 
                By far the best place to create a blog, imho."
                </div>
            </div>

            <div className='Languages-top'>

                <div>
                    <img className="blog-zero-logo" src={require("./logo/143655.png")} alt="photu" />
                    <div>{blogs[0].name}</div>
                    <div>{blogs[0].content}</div>

                </div>

                <div>
                    <img className="blog-zero-logo" src={require("./logo/javascript-39395.png")} alt="photu" />
                    <div>{blogs[blogs.length-1].name}</div>
                    <div>{blogs[blogs.length-1].content} </div>

                </div>

            </div>



        </div>
    );
};

export default LowerRight;