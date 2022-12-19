import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ColorfulBorder from './components/Border';
import Navigation from './components/Nav';
import EpisodesPage from './pages/Episodes';
import HomePage from './pages/Home';
import CharacterPage from './pages/Home/Character';

const App = () => {
  return (
    <Router>
      <ColorfulBorder />
      <Navigation />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path=":id" element={<CharacterPage />} />
        </Route>
        <Route path="/episodes" element={<EpisodesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
