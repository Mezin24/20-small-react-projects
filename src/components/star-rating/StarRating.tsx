import { useCallback, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

interface StarRatingProps {
  numOfStars?: number;
}

const StarRating = ({ numOfStars = 5 }: StarRatingProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = useCallback((starIndex: number) => {
    setRating(starIndex);
  }, []);

  const handleMouseEnter = useCallback((starIndex: number) => {
    setHover(starIndex);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHover(0);
  }, []);

  return (
    <div className='container'>
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={40}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};
export default StarRating;
