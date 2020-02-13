import React, { useState } from 'react';

function Click() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p>Count {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Click ne</button>
    </div>
  );
}

export default Click;