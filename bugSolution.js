```javascript
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  const location = useLocation();
  // Use a key prop to force a remount only when the location changes
  return (
    <div key={location.pathname}>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```