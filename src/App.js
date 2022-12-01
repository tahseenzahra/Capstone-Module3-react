import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ marginTop: '7rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
