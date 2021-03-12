// import './App.css';

const handleClick = () => {
  alert('LOVE')
}

function App() {
  return (
    <div className="App">
      <h1>Demo</h1>
      <h2 onClick={handleClick}>click will alert LOVE</h2>
    </div>
  );
}

export default App;
