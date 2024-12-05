import React, { useState, useEffect } from 'react';

function App() {

	const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  // Считаем количество рендеров
  const renderCount = React.useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`Component rendered ${renderCount.current} times`);
  });

  return (
    <div className="App">
			 <div style={{ padding: '20px',}}>
      <h1>Render Logger</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Text Input:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: '5px 10px', cursor: 'pointer' }}
        >
          Increment Count
        </button>
      </div>
      <p>Text: {text}</p>
      <p>Count: {count}</p>
    </div>
    </div>
  );
}

export default App;
