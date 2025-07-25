import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import EditItem from './pages/EditItem';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/footer';
import Welcome from './pages/Welcome';

function RequireAuth({ children }: { children: ReactNode }) {
  const isAuthed = !!localStorage.getItem('currentUser');
  const location = useLocation();
  if (!isAuthed) {
    return <Navigate to="/welcome" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Navbar is rendered inside each page if needed */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/create"
              element={
                <RequireAuth>
                  <CreateItem />
                </RequireAuth>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <RequireAuth>
                  <EditItem />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
