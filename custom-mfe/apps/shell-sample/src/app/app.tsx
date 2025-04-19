import useRemote from '../hooks/useRemote';
import RemoteButtonType from 'products/RemoteButton';

export function App() {
  const RemoteButton = useRemote<typeof RemoteButtonType>({ scope: 'products', module: 'RemoteButton' });
  
  return (
    <div>
      <p>Hi, I'am the HOST.</p>
      <RemoteButton />
    </div>
  );
}

export default App;
