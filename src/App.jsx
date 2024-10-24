import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Full from './Full'; // Your main page component
import BangVinhDanh from './bangvinhdanh'; // The component to show on a different page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Full />} />
        <Route path="/bangvinhdanh" element={<BangVinhDanh />} /> {/* Added leading slash */}
      </Routes>
    </Router>
  );
};

export default App;
