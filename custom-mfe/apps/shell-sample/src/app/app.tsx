import useRemote from '../hooks/useRemote';
import ProductsListType from 'products/ProductsList';
import styles from './app.module.css';

export function App() {
  const ProductsList = useRemote<typeof ProductsListType>({ scope: 'products', module: 'ProductsList' });

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
           <ProductsList />
         </div>
       </main>
     </div>
  );
}

export default App;
