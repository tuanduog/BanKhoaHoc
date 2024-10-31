import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Full from './Full'; 
import BangVinhDanh from './bangvinhdanh'; 
import TaiLieu from './tailieu/tailieu';
import LuyenDe from './luyende/luyende';
import Sach from './sach/sach';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Full />} />
        <Route path="/bangvinhdanh" element={<BangVinhDanh />} />
        <Route path="/tailieu/tailieu" element={<TaiLieu/>}/>
        <Route path='/luyende/luyende' element={<LuyenDe/>}/>
        <Route path='/sach/sach' element={<Sach/>}/>
      </Routes>
    </Router>
  );
};

export default App;
