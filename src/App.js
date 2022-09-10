import Form from './page/Form';
import Test from './page/test'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        

      <Router>
        <Routes>
          
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/test" element={<Test />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
