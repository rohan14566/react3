import React from 'react';

export const NextPage = ({ name, department,rating }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};