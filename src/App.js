import {
  BrowserRouter as Router,
  Routes,
  Route
} 
from 'react-router-dom';


import ImageBackground from "./shared/ImageBackground";
import Nav from "./components/Nav";
import Home from './components/Home';

function App() {
  return (
    <div className="App w-screen h-screen overflow-y-auto overflow-x-hidden bg-black bg-opacity-70 text-white flex flex-row">
      <Router>
        <ImageBackground>
          <Nav />
          <div className="w-4/5 flex flex-col items-center justify-center px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="" element={} />
              <Route path="" element={} />
              <Route path="" element={} />
              <Route path="" element={} /> */}
            </Routes>
          </div>
        </ImageBackground>
      </Router>
    </div>
  );
}

export default App;
