import axios from 'axios';

export interface Item {
  id?: string;
  name: string;
  data?: Record<string, any>;
}

const STORAGE_KEY = 'items';
const BASE = 'https://api.restful-api.dev/objects';

function getStoredItems(): Item[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function setStoredItems(items: Item[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// Fetch from restful-api.dev and save to localStorage
export const fetchRemoteItems = async (): Promise<Item[]> => {
  const res = await axios.get(BASE);
  // Map restful-api.dev object to Item type
  const items: Item[] = Array.isArray(res.data)
    ? res.data.map((obj: any) => ({
        id: String(obj.id),
        name: obj.name,
        data: obj.data || {},
      }))
    : [];
  setStoredItems(items);
  return getStoredItems();
};

// Fetch from localStorage
export const fetchItems = async (): Promise<Item[]> => {
  return getStoredItems();
};

export const createItem = async (item: Omit<Item, 'id'>): Promise<Item> => {
  const items = getStoredItems();
  const newItem: Item = { ...item, id: crypto.randomUUID() };
  items.push(newItem);
  setStoredItems(items);
  return newItem;
};

export const updateItem = async (id: string, item: Omit<Item, 'id'>): Promise<Item | undefined> => {
  const items = getStoredItems();
  const idx = items.findIndex(i => i.id === id);
  if (idx !== -1) {
    items[idx] = { ...items[idx], ...item, id };
    setStoredItems(items);
    return items[idx];
  }
  return undefined;
};

export const deleteItem = async (id: string): Promise<void> => {
  const items = getStoredItems().filter(i => i.id !== id);
  setStoredItems(items);
};