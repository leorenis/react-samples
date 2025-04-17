import { useState } from 'react';
import styles from './remote-button.module.css';
export default function Button() {

  const [count, setCount] = useState(0);

  return (
    <div className={styles['button']}>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(prev => prev +=1)}>Remote button</button>
    </div>
  )
}