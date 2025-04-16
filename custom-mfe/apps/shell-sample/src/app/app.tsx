//@ts-expect-error
import RemoteButton from 'products/RemoteButton';

export function App() {
  return (
    <div>
      <p>Hi, I'am the HOST.</p>
      <RemoteButton />
    </div>
  );
}

export default App;
