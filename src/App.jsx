import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css'
import Header from './screens/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CourseDetailPage from './pages/CourseDetailPage.jsx';
import { CssBaseline } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <CssBaseline />
      {/* If you have a Header component, you can include it here */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
