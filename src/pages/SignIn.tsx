import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Navbar} from '../components/Navbar'

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
    <Navbar />
      
    <div className="flex flex-col items-center justify-center mt-20 bg-gray-50">
    <h2 className='text-2xl font-extrabold text-gray-800 mb-4'>To access the app, please sign in.</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[320px] max-w-[90vw] mt-20">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-500">Sign In</button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-orange-600 hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
    </>
  );
} 