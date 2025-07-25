import { Link } from 'react-router-dom';
import phone from '../assets/phone.png';
import phone1 from '../assets/phone1.png';
import { Navbar } from '../components/Navbar';

export default function Welcome() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-orange-100 to-orange-200">
        <div className="bg-white bg-opacity-90 p-6 sm:p-10 flex flex-col items-center w-full max-w-2xl rounded-2xl shadow-xl mx-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-4 text-center">Welcome to Electronics Market</h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8 text-center">
            Discover, create, and manage the latest electronics. Sign in to get started or create a new account!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-6">
            <img src={phone} alt="phone" className="w-40 h-40 object-contain" />
            <img src={phone1} alt="phone" className="w-40 h-40 object-contain" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link to="/signin" className="px-6 py-2 bg-orange-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-orange-500 transition text-center">Sign In</Link>
            <Link to="/signup" className="px-6 py-2 bg-white border border-orange-600 text-orange-600 rounded-lg text-lg font-semibold shadow hover:bg-orange-50 transition text-center">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 