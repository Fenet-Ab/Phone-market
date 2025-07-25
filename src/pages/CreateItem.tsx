import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { createItem } from '../services/api';
import type { Item } from '../types';
import {Navbar} from '../components/Navbar'

export default function CreateItem() {
  const navigate = useNavigate();

  const handleSave = async (item: Item) => {
    await createItem({ name: item.name, data: item.data });
    navigate('/');
  };

  const handleCancel = () => navigate('/');

  return (
    <div>
        <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[320px] max-w-[90vw]">
        <h2 className="text-xl font-bold mb-4">Create Item</h2>
        <UserForm onSave={handleSave} onCancel={handleCancel} />
      </div>
    </div>
    </div>
  );
} 