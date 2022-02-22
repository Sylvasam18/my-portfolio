import React from 'react';
import Sample from '../images/image.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';


const Portfolio = () => {

    const openPopupbox = () => {
        const content = (
        <>
          <img className='portfolio-image-popup' src={Sample} alt="" />
          <p>This is just at the beginning used to hold text</p>
          <b>github:</b><a className='hyper-link' onClick={() => window.open("https://www.npmjs.com/package/react-popupbox")}>https://www.npmjs.com/package/react-popupbox</a>
        </>
        )

        PopupboxManager.open({content})
        }
    const popupbox1 = {
  titleBar: {
enable: true,
text: "my recent project"
},
faceIn: true,
faceInSpeed: 500
    }



    return (
        <div id="portfolio" className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
                <div className='image-box-wrapper row justify-content-center'>
                    <div className='portfolio-image-box col-lg-3 col-md-6 col-sm-6' onClick={openPopupbox}><img className='portfolio-image' src={Sample} alt="" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className='portfolio-image-box col-lg-3 col-md-6 col-sm-6' onClick={openPopupbox}><img className='portfolio-image' src={Sample} alt="" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className='portfolio-image-box col-lg-3 col-md-6 col-sm-6' onClick={openPopupbox}><img className='portfolio-image' src={Sample} alt="" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className='portfolio-image-box col-lg-3 col-md-6 col-sm-6' onClick={openPopupbox}><img className='portfolio-image' src={Sample} alt="" />
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupbox1} />
        </div>
    )
}

export default Portfolio
