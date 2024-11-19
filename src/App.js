import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AllDetailsAboutUser from './Components/AllDetailsAboutUser'
import AddNewUser from './Components/AddNewUser'

const App = () => <BrowserRouter>
  <Routes>
    <Route exact path='/' Component={Home} />
    <Route exact path='/user/:userid' Component={AllDetailsAboutUser} />
    <Route exact path='/addnewuser' Component={AddNewUser} />
  </Routes>
</BrowserRouter>

export default App;
