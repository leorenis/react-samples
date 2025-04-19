import RemoteButton from 'products/RemoteButton';
import useRemote from '../hooks/useRemote';

export function App() {

  const RemoteButton = useRemote({ scope: 'products', module: 'RemoteButton' });
  return (
    <div>
      <p>Hi, I'am the HOST.</p>
      <RemoteButton />
    </div>
  );
}

export default App;
