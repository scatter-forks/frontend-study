import './App.scss'
import LoginPage from './pages/login/index'

const handleClick = () => {
  alert('LOVE')
}

function App() {
  return (
    <div>
      <LoginPage />
      <h1 class='flex justify-center text-5xl my-4 font-serif'>Demo</h1>
      <h2 onClick={handleClick} className='flex justify-center font-mono my-2'>click will alert LOVE</h2>
      <h3 className="app">222</h3>
    </div>
  );
}

export default App;
