import React from 'react';
import { 
FacebookIcon,
FacebookMessengerShareButton,
TwitterIcon,
TwitterShareButton,
LinkedinIcon,
LinkedinShareButton,
RedditIcon,
RedditShareButton
 } from 'react-share';
 import { Link } from 'react-scroll'

const Footer = () => {
  return <div className='footer'>
           <div className='container'>
             <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                  <div className='flex'>
                      <p>City moscow main road #233</p>
                  </div>
                  <div className='flex'>
                      <a href='tel:+2347063339654'>+2347063339654</a>
                  </div>
                  <div className='flex'>
                      <p>sylvasam24@gmail.com</p>
                  </div>
              </div>
              <div className='col-lg-3 col-md-2 col-sm-6'>
                  <div className='row'>
                      <div className='col'>
                              <Link to="home" className='footer-nav'>Home</Link>
                              <br />
                              <Link to="about" className='footer-nav'>About me</Link>
                              <br />
                              <Link to="services" className='footer-nav'>Services</Link>
                      </div>
                      <div className='col'>
                              <Link to="experiences" className='footer-nav'>Experiences</Link>
                              <br />
                              <Link to="portfolio" className='footer-nav'>Portfolio</Link>
                              <br />
                              <Link to="contacts" className='footer-nav'>Contact me</Link>
                      </div>
                  </div>
              </div>
              <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
                  <div className='d-flex justify-content-center'>
                      <FacebookMessengerShareButton
                      url={'https://www.linkedin.com/in/elazakemhe-samson-221564190/'}
                      quote={'Full stack developer'}
                      hashtag='#Javascript'>
                          <FacebookIcon className='mx-3' size={36}/>
                      </FacebookMessengerShareButton>
                      <TwitterShareButton
                      url={'https://www.linkedin.com/in/elazakemhe-samson-221564190/'}
                      quote={'Fullstack developer'}
                      hashtag='#Javascript'>
                          <TwitterIcon className='mx-3' size={36}/>
                      </TwitterShareButton>
                      <LinkedinShareButton
                      url={'https://www.linkedin.com/in/elazakemhe-samson-221564190/'}
                      quote={'Fullstack developer'}
                      hashtag='#Javascript'>
                          <LinkedinIcon className='mx-3' size={36}/>
                      </LinkedinShareButton>
                      <RedditShareButton
                      url={'https://www.linkedin.com/in/elazakemhe-samson-221564190/'}
                      quote={'Fullstack developer'}
                      hashtag='#Javascript'>
                          <RedditIcon className='mx-3' size={36}/>
                      </RedditShareButton>
                  </div>
                  <p className='pt-3 text-center'>
                      Copyright&copy;
                      {new Date().getFullYear()}&nbsp;Sylva Links | All Rights Reserved
                  </p>
              </div>
             </div>
           </div>
         </div>;
};

export default Footer;
