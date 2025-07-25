import { Navbar } from "../components/Navbar";
import { useState, useEffect } from 'react';
import { fetchItems, deleteItem, fetchRemoteItems } from '../services/api';
import type { Item } from '../types';
import UserList from '../components/UserList';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const load = () => fetchItems().then(data => setItems(data.filter(item => typeof item.id === 'string')));

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        const local = await fetchItems();
        if (!local || local.length === 0) {
          await fetchRemoteItems();
        }
        load();
      } catch (e) {
        setError('Failed to fetch items.');
      } finally {
        setLoading(false);
      }
    };
    init();
    // eslint-disable-next-line
  }, []);

  const remove = async (id: string) => {
    try {
      await deleteItem(id);
      load();
    } catch (e) {
      setError('Failed to delete item.');
    }
  };

  const handleEdit = (item: Item) => navigate(`/edit/${item.id}`);


  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 ">Item Management</h1>
      </div>
      
      <div className="mx-auto mt-8">
       
        {loading && <div className="mb-4 text-gray-600">Loading...</div>}
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-5xl" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <UserList users={items} onEdit={handleEdit} onDelete={remove} />
          </div>
        </div>
      </div>
    </div>
  );
}
  