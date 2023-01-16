import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slidedown/lib/slidedown.css';
import AppRouter from './router'
import Sidebar from './components/Sidebar';
// import Header from './components/Header';

function App() {
  return (
    // <div className="App">
    <div className="d-flex h-100 position-relative" id="wrapper">
      <Sidebar />
      <main id="page-content-wrapper">
        <div className='overlay'></div>
        <AppRouter />
      </main>
    </div>
    // </div>
  );
}

export default App;
