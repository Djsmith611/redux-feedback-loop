import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { AppHeader, FormFeeling, FormSupport, FormComprehension, FormComments, FormReview, AdminView } from '../../index';

function App() {

  return (
    <div className='App'>
      <AppHeader />
      <Router>
        <Route path='/form/feeling'>
          <FormFeeling />
        </Route>
        <Route path='/form/support'>
          <FormSupport />
        </Route>
        <Route path='/form/comprehension'>
          <FormComprehension />
        </Route>
        <Route path='/form/comments'>
          <FormComments />
        </Route>
        <Route path='/form/review'>
          <FormReview />
        </Route>
        <Route path='/admin'>
          <AdminView />
        </Route>
      </Router>
    </div>
  );
}

export default App;
