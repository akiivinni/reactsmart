import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './Pages/admin';  
import UploadPage from './Pages/upload';  



function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/admin/upload" element={<UploadPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
