// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import Rockets from './components/Rockets/Rockets';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
