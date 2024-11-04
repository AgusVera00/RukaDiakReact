import React, { useState } from 'react';

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onRatingChange(value);
  };

  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'selected' : ''}`}
          data-value={index + 1}
          onClick={() => handleClick(index + 1)}
        >
          ★
        </span>
      ))}
      <input type="hidden" id="rating-value" value={rating} />
    </div>
  );
};

export default StarRating;