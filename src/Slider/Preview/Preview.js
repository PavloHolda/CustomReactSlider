import React from 'react';

const Preview = props => {
    return(
        <div className="preview-item">
            <img src={props.data} alt="space"></img>
            <button className="preview-item__btn" type="button" onClick={props.deleteImg}>X</button>
        </div>
    )
}

export default Preview;