import React from 'react';

const AddNewSlide = props => {
    return(
        <div className="slider-add">
            <p className="slider-add__text">Add a new slide from url link</p>
            <input className="slider-add__input" type="text" onChange={props.getInputValue()}></input>
            <button className="slider-add__button" type="button" onClick={props.addSlide()}>Add</button>
        </div>
    )
}

export default AddNewSlide;