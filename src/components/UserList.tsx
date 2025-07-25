import type { Item } from '../types';
import UserCard from './UserCard';

type Props = {
  users: Item[];
  onEdit: (user: Item) => void;
  onDelete: (id: string) => void;
};

function isFilled(user: Item) {
  if (!user.data) return false;
  return Object.values(user.data).every(v => v !== '' && v !== null && v !== undefined);
}

export default function UserList({ users, onEdit, onDelete }: Props) {
 
  const sorted = [
    ...users.filter(u => !isFilled(u)),
    ...users.filter(u => isFilled(u)),
  ];
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map(u => (
          <UserCard key={u.id} user={u} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
