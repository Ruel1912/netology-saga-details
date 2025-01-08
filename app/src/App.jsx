import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesList from './components/ServicesList';
import ServiceDetails from './components/ServiceDetails';

export default function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ServicesList />} />
          <Route path="/:id/details" element={<ServiceDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
