import React from 'react';

const Dots = props => {
    return(
        <span className={props.index === props.position / -1000 ? 'dot active' : 'dot'} onClick={props.dotsClick}></span>
    )
}

export default Dots;