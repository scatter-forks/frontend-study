const handleClick = () => {
  alert('LOVE')
}

function App() {
  return (
    <div className="App">
      <h1 class='flex justify-center text-5xl my-4 font-serif'>Demo</h1>
      <h2 onClick={handleClick} class='flex justify-center font-mono my-2'>click will alert LOVE</h2>
    </div>
  );
}

export default App;
