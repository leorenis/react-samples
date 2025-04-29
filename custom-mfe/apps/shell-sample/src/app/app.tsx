import useRemote from '../hooks/useRemote';
import RemoteButtonType from 'products/RemoteButton';
import styles from './app.module.css';

export function App() {
  const RemoteButton = useRemote<typeof RemoteButtonType>({ scope: 'products', module: 'RemoteButton' });

  return (
    <div className={styles.container}>
       <header className={styles.header}>
         <h1 className={styles.title}>MFE Demo Store</h1>
         <p className={styles.description}>
           Welcome to our demo store powered by Micro Frontends. Browse through our selection of products
           loaded dynamically from a remote application.
         </p>
       </header>
       <main className={styles.content}>
         <div>
           <RemoteButton />
         </div>
       </main>
     </div>
  );
}

export default App;
