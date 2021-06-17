import React from 'react';

const SliderItem = props => {
    return(
        <div className="slider-item">
            <img src={props.img.img} alt="space"></img>
        </div>
    )
}

export default SliderItem;