import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('Call useEffect');
    if(value > 0)
      document.title = `New Messages(${value})`;
  }, [value]); // By passing an empty array we can run useEffect only once when component is rendered
  return (
  <>
    <h1>{value}</h1>
    <button onClick={() => setValue(value + 1)} className="btn">
      Click Me
    </button>
  </>
  );
};

export default UseEffectBasics;
