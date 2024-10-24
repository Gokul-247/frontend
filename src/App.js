import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import ViewPage from './Pages/ViewPage';
import CreatePage from './Pages/CreatePage';
import UpdatePage from './Pages/UpdatePage';
import DeletePage from './Pages/DeletePage';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element ={<HomePage /> }/>
          <Route path='/ViewPage' element ={<ViewPage /> }/>
          <Route path='/CreatePage' element ={<CreatePage /> }/>
          <Route path='/UpdatePage' element ={<UpdatePage /> }/>
          <Route path='/DeletePage' element ={<DeletePage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
