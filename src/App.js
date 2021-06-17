import './App.scss';
import './Slider/Slider.scss';
import { useState } from 'react';
import Data from './Slider/Data';
import SliderItem from './Slider/SliderItem/SliderItem';
import Dots from './Slider/Dots/Dots';
import AddNewSlide from './Slider/AddNewSlide/AddNewSlide';
import Preview from './Slider/Preview/Preview';

const App = () => {
  
  const [data, setData] = useState(Data);
  const [position, setPosition] = useState(0);
  const [inputValue, setInputValue] = useState(null);
  const [width, setWidth] = useState(data.length * 1000);

  let slides = {
    width: width + "px",
  }

  const nextSlide = e => {
    let newPosition =  position;
    const lastItem = data.length - 1;
    newPosition += -1000;
    newPosition < -lastItem * 1000 ? setPosition(0) : setPosition(newPosition)
  }

  const prevSlide = e => {
    let newPosition =  position;
    const lastItem = data.length - 1;
    newPosition += 1000;
    newPosition > 0 ? setPosition(lastItem * -1000) : setPosition(newPosition)
  }

  const dotsClick = index => {
    setPosition(index * -1000)
  }

  const getInputValue = e => {
    let link = e.target.value;
    setInputValue(link);

  }

  const addSlide = () => {
    
    if(inputValue === null) {
      return false
    } else {
      let lastThreeNumbers = inputValue.slice(-3)
  
      if(inputValue.length === 0 || (!/[^\s]/.test(inputValue) || /^\s*$/.test(inputValue) || inputValue.replace(/\s/g,"") === "")){
        return false
      } else if (lastThreeNumbers === 'jpg' || lastThreeNumbers === 'png'){
        let [...newImg] = data;
        let newSlide = {
          id: data.length + 1,
          img: inputValue
          }
  
        newImg.push(newSlide);
        setData(newImg);
        setWidth(width + 1000);
      } else {
        return false
      }
    }
  }

  const deleteImg = id => {
    let [...newArr] = data;
    let newWidth = width;
    let newPosition = position;
    newArr.splice(id,1);
    newWidth += -1000;
    newPosition = 0;
    setData(newArr);
    setPosition(newPosition)
    setWidth(newWidth)
  }

  const dots = data.map((item,index) => {
    return(
      <Dots
        key={item.id}
        index={index}
        position={position}
        dotsClick={() => dotsClick(index)}
      />
    )
  });

  const preview = data.map((item,index) => {
    return(
      <Preview
        key={item.id}
        data={item.img}
        deleteImg={() => deleteImg(index)}
      />
    )
  })

  const images = data.map(item => {
    return (
      <SliderItem 
        key = {item.id}
        img = {item}
      />
    )
  });

  return (
    <div className="app">
        <div className={images.length < 1 ? 'dn' : 'slider'}>
          <div className='slides' style={{left: position +'px',...slides}}>
            {images}
          </div>
          <a href="#" className="btn-next btn" onClick={nextSlide}></a>
          <a href="#" className="btn-prev btn" onClick={prevSlide}></a>
        </div>
        <div className="dots-wrapper">
          {dots}
        </div>
        <AddNewSlide
          getInputValue={() => getInputValue}
          addSlide={() => addSlide}     
        />
        <div className="preview-wrapper">
          {preview}
        </div>
    </div>
  );
}

export default App;
