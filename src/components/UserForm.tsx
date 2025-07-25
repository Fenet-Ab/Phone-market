import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { Item } from '../types';

type Props = {
  selected?: Item | null;
  onSave: (data: Item) => void;
  onCancel: () => void;
};

const DEFAULT_FIELDS = ['color', 'price', 'capacity', 'generation', 'year', 'CPU model', 'Hard disk size', 'Strap Colour', 'Case Size', 'Description', 'Capacity GB', 'Screen size', 'Company', 'City'];

export default function UserForm({ selected, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Item>({ name: '', data: {} });

  useEffect(() => {
    if (selected) setForm(selected);
    else setForm({ name: '', data: {} });
  }, [selected]);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') setForm({ ...form, name: value });
    else setForm({ ...form, data: { ...form.data, [name]: value } });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    setForm({ name: '', data: {} });
  };

  // Collect all unique data keys from selected or default
  const dataKeys = Array.from(new Set([
    ...DEFAULT_FIELDS,
    ...(form.data ? Object.keys(form.data) : []),
  ]));

  return (
    <form onSubmit={submit} className="space-y-6 p-6 border rounded-2xl shadow-xl bg-white max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input name="name" placeholder="Name" value={form.name} onChange={change} />
        {dataKeys.map(key => (
          <Input
            key={key}
            name={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={form.data?.[key] || ''}
            onChange={change}
          />
        ))}
      </div>
      <div className="flex space-x-2 justify-end">
        <Button type="submit">{selected ? 'Update' : 'Create'}</Button>
        {selected && <Button variant="secondary" onClick={onCancel}>Cancel</Button>}
      </div>
    </form>
  );
}
