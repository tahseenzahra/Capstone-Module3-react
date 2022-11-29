import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Outlet />
        </main>
      </header>
    </div>
  );
}

export default App;
