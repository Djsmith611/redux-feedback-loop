import "./App.css";
import {
  AdminView,
  AppHeader,
  Feeling,
  Support,
  Understanding,
  Comments,
  Review,
  ThankYou /*AdminView */,
} from "../../index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Routes>
          <Route exact path="/" element={<Feeling />} />
          <Route path="/understanding" element={<Understanding />} />
          <Route path="/support" element={<Support />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/review" element={<Review />} />
          <Route path="/thank" element={<ThankYou />} />
          <Route path="/admin" element={<AdminView />} />
        </Routes>
      </Router>
    </div>
  );
};
