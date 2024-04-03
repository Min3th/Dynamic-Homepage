import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/pages/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element = {<Home/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
