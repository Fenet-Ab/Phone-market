import type { Item } from '../types';
import edit from '../assets/edit_icon.png';
import deleteIcon from '../assets/delete.png';

type Props = {
  user: Item;
  onEdit: (user: Item) => void;
  onDelete: (id: string) => void;
};

export default function UserCard({ user, onEdit, onDelete }: Props) {
  const handleDelete = () => {
    if (user.id && window.confirm('Are you sure you want to delete this item?')) {
      onDelete(user.id);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between items-stretch min-h-[260px] max-h-[320px] min-w-[260px] max-w-[320px] w-[300px] h-[300px] transition-transform hover:scale-105 hover:shadow-2xl border border-orange-100 mx-auto">
      <div className="mb-4 flex-1 flex flex-col justify-center">
        <p className="font-bold text-lg text-orange-700 mb-2 truncate text-center">{user.name}</p>
        <div className="space-y-1 text-left ml-10">
          {user.data && Object.entries(user.data).map(([key, value]) => (
            <p className="text-sm text-gray-600" key={key}><span className="font-semibold text-gray-800">{key}:</span> {String(value)}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        <button
          onClick={() => onEdit(user)}
          className="p-2 rounded-full hover:bg-orange-100 transition"
          title="Edit"
        >
          <img src={edit} alt="Edit" className="w-5 h-5" />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 rounded-full hover:bg-red-100 transition"
          title="Delete"
        >
          <img src={deleteIcon} alt="Delete" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
