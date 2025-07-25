import { Link, useNavigate } from "react-router-dom"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('currentUser');
    setUser(stored ? JSON.parse(stored) : null);
    // Listen for changes in localStorage (e.g., logout in another tab)
    const handler = () => {
      const stored = localStorage.getItem('currentUser');
      setUser(stored ? JSON.parse(stored) : null);
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow mb-6">
      <div className="text-2xl font-bold text-orange-600" onClick={()=>navigate('/welcome')}>Electronics Market</div>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/create" className="text-gray-700 hover:text-orange-500">+Create</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {user ? (
              <div className="flex items-center space-x-2">
                <div
                  className="w-9 h-9 bg-orange-600 text-white flex items-center justify-center rounded-full text-lg font-bold select-none"
                  title={user.name}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <Button onClick={handleLogout} className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-3 py-1 rounded">
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/signin" className="text-gray-700 hover:underline">
                <Button className="bg-orange-600 hover:bg-orange-400"> Sign In</Button>
              </Link>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
