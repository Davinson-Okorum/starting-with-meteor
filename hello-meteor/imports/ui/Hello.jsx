import React, { useState } from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(2);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click Me Now</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
