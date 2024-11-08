import Main from './components/main';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './services/firbase';
import { onAuthStateChanged } from 'firebase/auth';

import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={isAuth ? <Main /> : <Navigate to="/login" />} />
            <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={isAuth ? <Navigate to="/login" /> : <Register />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
