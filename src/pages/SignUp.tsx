import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Navbar} from '../components/Navbar'

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.email === email)) {
      setError('Email already exists');
      return;
    }
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/signin');
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center mt-20 bg-gray-50">
          <h2 className='text-2xl font-extrabold text-gray-800 mb-4'>To access the app, please sign up.</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[320px] max-w-[90vw] mt-20">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
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
          <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-500">Sign Up</button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/signin" className="text-orange-600 hover:underline">Sign in</Link>
        </div>
      </div>
    </div>
    </>
  );
} 