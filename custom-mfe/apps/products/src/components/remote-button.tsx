import { useState } from 'react';
export default function Button() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(prev => prev +=1)}>Remote button</button>
    </div>
  )
}