import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../images/mine.jpg"

const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <>
            <img src={avatar1} alt=""/>
            <div className='myCarousel'>
                <h3>Sammy Blow</h3>
                <p>this is simply another sample testimonial. So please do not take it too personal or react in an unfavourable way</p>
            </div>
            </>
            <>
            <img src={avatar1} alt=""/>
            <div className='myCarousel'>
            <h3>Sammy Blow</h3>
            <p>this is simply another sample testimonial. So please do not take it too personal or react in an unfavourable way</p>
            </div>
            </>
            <>
            <img src={avatar1} alt=""/>
            <div className='myCarousel'>
            <h3>Sammy Blow</h3>
            <p>this is simply another sample testimonial. So please do not take it too personal or react in an unfavourable way</p>
            </div>
            </>
            <>
            <img src={avatar1} alt=""/>
            <div className='myCarousel'>
            <h3>Sammy Blow</h3>
            <p>this is simply another sample testimonial. So please do not take it too personal or react in an unfavourable way</p>
            </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
