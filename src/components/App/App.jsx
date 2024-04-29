import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppHeader, Feeling, Support, Understanding, Comments, Review, ThankYou,/*AdminView */  } from '../../index';
import AdminView from '../Admin/AdminView';
function App() {

  return (
    <div className='App'>
      <AppHeader />
      <Router>
      <Routes>
          <Route exact path='/' element={<Feeling />} />
          <Route path='/understanding' element={<Understanding />} />
          <Route path='/support' element={<Support />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/review' element={<Review />} />
          <Route path='/thank' element={<ThankYou />} />
          <Route path='/admin' element={<AdminView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
