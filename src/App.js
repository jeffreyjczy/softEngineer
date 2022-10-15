import Form from './page/Form';
import Login from './page/Login';
import Test from './page/test'

import LectPreviewPage from'./page/previewPage/LectPreviewPage'
import LectHomePage from'./page/homePage/LectHomePage'

import DeanPreviewPage from'./page/previewPage/DeanPreviewPage'
import DeanHomePage from'./page/homePage/DeanHomePage'

import HRPreviewPage from'./page/previewPage/HRPreviewPage'
import HRHomePage from'./page/homePage/HRHomePage'

import AAPreviewPage from'./page/previewPage/AAPreviewPage'
import AAHomePage from'./page/homePage/AAHomePage'

import IRASPreviewPage from'./page/previewPage/IRASPreviewPage'
import IRASHomePage from'./page/homePage/IRASHomePage'

import ComPreviewPage from'./page/previewPage/ComPreviewPage'
import ComHomePage from'./page/homePage/ComHomePage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import myJson from './data.json';

// localStorage.setItem('wholeData', JSON.stringify(myJson));

function App() {
  return (
    <div>
        

      <Router>
        <Routes>
          
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/" element={<Login />} />
          {/* Preview Page */}
          <Route exact path="/lectpreviewpage" element={<LectPreviewPage />} />
          <Route exact path="/deanpreviewpage" element={<DeanPreviewPage />} />
          <Route exact path="/HRPreviewPage" element={<HRPreviewPage />} />
          <Route exact path="/AAPreviewPage" element={<AAPreviewPage />} />
          <Route exact path="/IRASPreviewPage" element={<IRASPreviewPage />} />
          <Route exact path="/ComPreviewPage" element={<ComPreviewPage />} />

          {/* Homepage */}
          <Route exact path="/lecthomepage" element={<LectHomePage />} />
          <Route exact path="/deanhomepage" element={<DeanHomePage />} />
          <Route exact path="/hrhomepage" element={<HRHomePage />} />
          <Route exact path="/aahomepage" element={<AAHomePage />} />
          <Route exact path="/irashomepage" element={<IRASHomePage />} />
          <Route exact path="/Comhomepage" element={<ComHomePage />} />

          <Route exact path="/test" element={<Test />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
