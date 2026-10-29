import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/common/main-layout.jsx';
import HomePage from './pages/home-page.jsx';
import AboutPage from './pages/about-page.jsx';
import ProjectsPage from './pages/projects-page.jsx';

// GitHub Pages에서 새로고침 시 404가 나지 않도록 HashRouter 사용
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
