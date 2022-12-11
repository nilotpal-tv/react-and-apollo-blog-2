import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EpisodesPage from './pages/Episodes';
import EpisodePage from './pages/Episodes/Episode';
import HomePage from './pages/Home';
import CharacterPage from './pages/Home/Character';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path=":id" element={<CharacterPage />} />
        </Route>
        <Route path="/episodes">
          <Route index element={<EpisodesPage />} />
          <Route path=":id" element={<EpisodePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
