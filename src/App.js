// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navigation/Navbar';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import Rockets from './components/Rockets/Rockets';
import store from './redux/configureStore';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="Missions" element={<Missions />} />
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
