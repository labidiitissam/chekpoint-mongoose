
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './pages/Error/Error';
import AddContact from './pages/AddContact/AddContact';
import ListContact from './pages/ListContact/ListContact';
import EditContact from './pages/EditContact/EditContact';
import Home from './pages/Home/Home';
import ResponsiveAppBar from './Components/NavBar/ResponsiveAppNav';


function App() {
  return (
    <div className="App">
     <ResponsiveAppBar/>
    
    <Routes>  

     <Route path='/' element={<Home/>} />
      <Route path="/*" element={<Error/>} />
      <Route path="/AddContact" element={<AddContact/>} />
      <Route path="/ListContact" element={<ListContact/>} />
      <Route path="/EditContact/id" element={<EditContact/>} />

      </Routes>
    </div>
  );
}

export default App;
