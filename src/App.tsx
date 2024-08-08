import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
