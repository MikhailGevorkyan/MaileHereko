import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimePage from './pages/AnimePage';
import MangaPage from './pages/MangaPage';
import DetailedAnimePage from './pages/details/DetailedAnimePage';
import SuggestionsPage from './pages/SuggestionsPage';
import DetailedMangaPage from './pages/details/DetailedMangaPage';

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/manga" element={<MangaPage />} />
        <Route path="/suggestions/" element={<SuggestionsPage />} />
        <Route path="/anime/:id" element={<DetailedAnimePage />} />
        <Route path="/manga/:id" element={<DetailedMangaPage />} />
      </Routes>
    </div>
  );
};

export default App;
