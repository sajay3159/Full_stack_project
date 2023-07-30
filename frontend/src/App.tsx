import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import Update from './components/Update';
// import Sorted from './components/Sorted';

// import List from './components/List';
// import UpdatedList from './components/UpdatedList';
import SortedTable from './components/SortedTable';
import Apps from './redux/Apps';
import MuiForms from './components/MuiForms';

function App() {
  return (
   <div className="App">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<MuiForms/>}/>
    {/* <Route path="/list" element={<List/>}/> */}
    {/* <Route path="/update" element={<Update/>}/> */}
    <Route path="/update/:id" element={<MuiForms/>}/>
    {/* <Route path="/sorted" element={<Sorted/>}/> */}
    {/* <Route path="/updatedList" element={<UpdatedList/>}/> */}
    <Route path="/sortedlist" element={<SortedTable/>}/>
    <Route path="/dropdown" element={<Apps/>}/>
  </Routes>
    </div>
  );
}

export default App;
