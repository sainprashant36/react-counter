import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
      <h1>My First React App</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <button onClick={() => setCount(0)} style={{margin: '0 10px'}}>
        Reset
      </button>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default App;