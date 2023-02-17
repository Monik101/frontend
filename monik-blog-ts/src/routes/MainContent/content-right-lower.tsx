
import { Link } from 'react-router-dom';
import blogs from '../../const/blogs';

function LowerRight(){
    return(


        <div className="lowerright">
            <div className='maintext-img'>
                <div className='textdiv'>
                    <h1>
                        <span className="maintext">Monik-Blog </span>
                        <span className='maintext2'> A platform for personal updates</span>
                    </h1>
                    <div>
                        <Link className='linkprofile' to='/Profile'>Profile</Link>
                    </div>
                </div>
                <div className='imgdiv'>
                    <img className='img' alt="timer" src={require('./logo/contentimage.webp')} />

                </div>

            </div>

            <div className='content-semi'>
                <div className='content-semi-part1'>
                    <img className='content-semi-profile' src={require("./logo/blog-fotu.jpg")} alt="photu" />
                </div>
                <div className='content-semi-part2'>
                    <div>
                        "You can start a dev blog in just a few seconds using Hashnode 
                        and then you can move that to your own domain if you get one later. 
                        They will even help distribute your articles on their platform. 
                        By far the best place to create a blog, imho."
                    </div>

                    <a className='join-part'>Join</a>
                </div>


            </div>


            <div className='anotherheading'>
                <h1>Latest in the <span className='Blog-color'> Blog</span> </h1>
            </div>

            <div className='Languages-top'>
                {blogs.map(blog => <div className='l1'>
                    <img className="blog-zero-logo" src={blog.imgurl} alt="photu" />
                    <div className='blog-content'>
                        <div className='heading-lt'>{blog.name}</div>
                        <div className='Below-heading-lt'>{blog.content}</div>
                    </div>

                </div>)}
            </div>


            <div className='blackspace'>

                <div className='blackspace-one'>
                    <div className='blackspace-one-text'>
                        <h2>Welcome</h2>
                        <h1>Tools used to make this website!</h1>

                    </div>

                    <div className='blackspace-one-logo'>
                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643362175006/IgPo-NlO9.png?auto=compress" alt="image" />

                    </div>

                </div>

                <div className='blackspace-two'>

                    <div className='toolsFirstSec'>
                        <div className='tools'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAaVBMVEX///8XFRUAAAATERH09PTp6ekQDQ0GAAC4uLj39/e8vLzw8PD8/PzAwMALBwe0tLSUlJSfn5+Ih4fg4OB2dnYjIiLQ0NArKirY2Nh/fn7LysppaGhMS0thYWE4NzcdHByop6dVVFRBQUEOIdwWAAAE0ElEQVRoge1a2ZaqOhBtKgyiiCAgo4r8/0ceQAKZIAnQ59x1F/utWyqbJDXsFPn5OXDgwIEDBw7owrOiLMsiy/trjOY1KBuY8CqDs/nLnN41t1sqxzYm2E7Hnl9/b+ZF3BIgQwTU/lIWv0Fq1ukc6Uid1nsvuBmmYC+QDksOaXDZkdW7qbAOzPVuG519FFm/zNVjH9oAHGXWDj7cd2C9VKDF2gEaayttoTlZPOXrNtp6MXTmgSDcQnvXX2OMLZu8gbYlzv8J7XriYBvt2qW+baVtiWt92mw7bUusnbpcYwqgrsgp52eqVCLQLRPPabrILrJz8Fqugt/ptfXolD3S6UH46NHWxCoPfhndJcyt6Ij6J8k40MsfkU0wwHn476VlHlbAGeWV4yPMipNyQfAiiDR4S9KpiD2KSvBbrqR6xvcgDMPgHj+rpP2PD89sfMqjrJ/qtFfSEAH506kp68hyif+4VnSLmxv5UEo6oUaJqHzCzq7UX3jAk7T3G1UBcqZC19dYqAExNQDc5BY9Gn9XXvulZlXQmcrXDMEWJa0VFHf4Q1shpM3b0MnNV/IQi03M4MqNKHjcCCoxHHJWqn6BUXAjBApWKVsB4KTJe2V57bfc6MK9rL5s4BQDyHVtzdiovCsHOhKVBAATAzppbgIrGpxSasLUOr9ZQUuV7+/bywzYKFop/B/sMLJIOtEGKFl5qmSiQhqLjCuCfGPEYLS3NIJj5nndnIHBxDDEkuc/dAToC9EBGVtclvfLe1H7guxs8fF5WAkVF/Zrmdelwwglaw/QJjMBSXExWXfeideA5Q7Tf4XX0FG/JKwUbeF11vpVZGzhNWBtz5GtDLq8O+UNGa+bMMuztjsSsg66HEdeReerlWWQK4R+JakvTNlHycrOLuPO0sLP9nD2qr+y/WLl1cpCmLPD1BID1v/1OxQdPLYzANI8wEnQNR7Na3+pCePQ1HFfFS47XYUTEq+59c+hJTeG/KDCeqJuS+aH90012cL36TST5VkwgoJZLDCrNWgFrXKpquvAnSI7w1L1DOxye2uoVrVkUApkWxIUp1w7Alo7UbIdgs9+naPingJ+iSSUaY8oTISdREXHvKDe+NtPMQM8lA1GFT7m9Jb1CCskbtoipJgBhtoAcV+LruMckA+QVmXOligzL7tmoT/TNVXOeNZ7aHW++rCjGu9I9DUsmOXsLN7KmhTnrOHzExVZwi4Ye76npqvSVPliFL92f25138S+CbssXCeFfE8N5TCegp1e5xSTm84IkHR2nfW6QWP0f+P2CvSLcGD7ChOtnm64vHH0GP3f0Qe318W5miu4eHnemlV03DEssKIgLuOgmMmXpxlefXk2+rSSkhXUoJ5W3ZdH4C1Tysxi3hWSoY2eFyY+yx8W8sJLt5Pb45I4eLWkzSQRr5OsvFNhvTFxGkqCX8DrqOdHFhdcBe22IMRBGOSfmTTA80K64QaJOV1m6L84gj+z2RwvVJuuzLis2lLkhXiVSxEIwVfgpfOGv+02wxePFEQfKed5EaS73JRxc+LuyIxfEbwO5FvXGOPRjMpJxmtDs9O1oO+4+CLUMq8Nqe7HFxluSV+Dl3gBkrXtnyU8yi6CxUnI6n4q91xhEu6tntXP9W0vbzpw4MCBAwf+9/gDAPw29HjkRogAAAAASUVORK5CYII=" alt="git" />
                            <div className='toolstext'>
                                <h2>Git Hub</h2>
                                <p>GitHub, Inc. is an Internet hosting service for software development and version control using Git. 
                                    It provides the distributed version control of Git plus access control, bug tracking, software feature requests, 
                                    and many more for every project.</p>
                            </div>
                        </div>

                        <div className='tools'>
                            <img src="https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png" alt="" />
                            <div className='toolstext'>
                                <h2>Visual Studio</h2>
                                <p>Visual Studio is an integrated development environment from Microsoft. 
                                    It is used to develop computer programs including websites, web apps, 
                                    web services and mobile apps.</p>
                            </div>

                        </div>
                    </div>
                    
                    <div className='toolsSecondSec'>
                        <div className='tools'>
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react" />
                            <div className='toolstext'>
                                <h2>React</h2>
                                <p>React is a free and open-source front-end JavaScript library for building user interfaces 
                                    based on UI components. It is maintained by Meta and a community of individual developers 
                                    and companies.</p>
                            </div>

                        </div>

                        <div className='tools'>
                            <img src="https://www.svgrepo.com/download/369452/netlify.svg" alt="react" />
                            <div className='toolstext'>
                                <h2>Netlify</h2>
                                <p>Netlify is a remote-first cloud computing company that offers a development 
                                    platform that includes build, deploy, and serverless backend services for 
                                    web applications and dynamic websites</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className='testimonials'>
                
                <h2>Testimonials</h2>


            </div> */}

        </div>
    );
};

export default LowerRight;