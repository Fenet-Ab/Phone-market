import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import { fetchItems, updateItem } from '../services/api';
import type { Item } from '../types';
import { Navbar } from '../components/Navbar';

export default function EditItem() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems().then(items => {
      const found = items.find(i => i.id === id);
      setItem(found || null);
      setLoading(false);
    });
  }, [id]);

  const handleSave = async (edited: Item) => {
    if (id) await updateItem(id, { name: edited.name, data: edited.data });
    navigate('/');
  };

  const handleCancel = () => navigate('/');

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (!item) return <div className="flex items-center justify-center min-h-screen text-red-600">Item not found.</div>;

  return (
   <div>
    <Navbar />
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        
         <h1 className="text-2xl font-extrabold text-gray-700 mb-4">Edit item here.</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[320px] max-w-[90vw]">
        <h2 className="text-xl font-bold mb-4 text-orange-600">Edit Item</h2>
        <UserForm selected={item} onSave={handleSave} onCancel={handleCancel} />
      </div>
    </div>
    </div>
  );
} 