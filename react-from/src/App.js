
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShowInteresados from './components/ShowInteresados';
import CreateInteresado from './components/CreateInteresados';
import EditInteresados from './components/EditInteresados';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowInteresados />} />
          <Route path='/create' element={ <CreateInteresado /> } />
          <Route path='/edit/:id' element={ <EditInteresados /> } />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
