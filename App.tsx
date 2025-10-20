import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<StudentList />} />
      <Route path="/student/:id" element={<StudentDetail />} />
    </Routes>
  </Router>
);

export default App;
