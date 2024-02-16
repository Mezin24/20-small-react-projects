import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsArrowRightCircle } from 'react-icons/bs';
import { slides } from './data';
import './styles.css';
import { useCallback, useState } from 'react';

const Slider = () => {
  const [curretSlide, setCurretSlide] = useState<number>(0);

  const handlePrev = useCallback(() => {
    setCurretSlide(curretSlide === 0 ? slides.length - 1 : curretSlide - 1);
  }, [curretSlide]);

  const handleNext = useCallback(() => {
    setCurretSlide(curretSlide === slides.length - 1 ? 0 : curretSlide + 1);
  }, [curretSlide]);

  return (
    <div className='container'>
      <BsArrowLeftCircle className='arrow arrow-left' onClick={handlePrev} />
      <BsArrowRightCircle className='arrow arrow-right' onClick={handleNext} />
      {slides && slides.length
        ? slides.map(({ id, image }, index) => (
            <img
              key={id}
              src={image}
              alt={image}
              className={curretSlide === index ? 'slide slide-active' : 'slide'}
            />
          ))
        : null}
      <div className='indicators'>
        {slides && slides.length
          ? slides.map((_, index) => (
              <button
                key={index}
                className={
                  curretSlide === index
                    ? 'indicator indicator-active'
                    : 'indicator'
                }
                onClick={() => setCurretSlide(index)}
              ></button>
            ))
          : null}
      </div>
    </div>
  );
};
export default Slider;
