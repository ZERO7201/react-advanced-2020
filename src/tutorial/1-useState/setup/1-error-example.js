import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  }

  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick} className="btn">
        change title
      </button>
    </>
  );
};

export default ErrorExample;
