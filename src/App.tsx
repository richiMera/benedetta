import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NutrizioneInGravidanza from './pages/NutrizioneInGravidanza';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/nutrizione-in-gravidanza"
          element={<NutrizioneInGravidanza />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;