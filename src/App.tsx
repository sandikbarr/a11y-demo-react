import './App.css';

import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header></header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<h1>hello</h1>} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
