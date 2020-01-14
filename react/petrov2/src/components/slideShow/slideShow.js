import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slideShow.scss';

export const SlideShow = props => {
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
    }
    const { images } = props;
    return (
        <div className="slide-container">
            <Slide {...properties}>
                {
                    images.map((image, index) => (
                        <div key={index.toString()} className="each-slide">
                            <div className="slideImage" style={{'backgroundImage': `url(${image})`}}>
                                <span>Slide 1</span>
                            </div>
                        </div>
                    ))
                }
            </Slide>
        </div>
    );
}