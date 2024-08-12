import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimePage from './pages/AnimePage';
import MangaPage from './pages/MangaPage';
import DetailedPage from './pages/DetailedPage';

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/manga" element={<MangaPage />} />
        <Route path="/details/:id" element={<DetailedPage />} />
      </Routes>
    </div>
  );
};

export default App;
