import Main from './components/main';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import { Routes,Route} from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App" >
       
       <Routes>
        <Route path='/' element= { <Main /> }> </Route>  
        <Route path = '/login' element={<Login/>}  />
        <Route path = '/register' element={<Register/>}  />
      </Routes>   
    </div>
  );
}

export default App;
