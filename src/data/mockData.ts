export type Category = "Fruits" | "Vegetables" | "Dairy" | "Snacks";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  unit: string;
  inStock: boolean;
}

export const categories: { name: Category; emoji: string }[] = [
  { name: "Fruits", emoji: "🍎" },
  { name: "Vegetables", emoji: "🥦" },
  { name: "Dairy", emoji: "🧀" },
  { name: "Snacks", emoji: "🍿" },
];

export const products: Product[] = [
  { id: "1", name: "Red Apple", price: 1.49, image: "🍎", category: "Fruits", unit: "per lb", inStock: true },
  { id: "2", name: "Banana Bunch", price: 0.99, image: "🍌", category: "Fruits", unit: "per bunch", inStock: true },
  { id: "3", name: "Strawberries", price: 3.99, image: "🍓", category: "Fruits", unit: "per box", inStock: true },
  { id: "4", name: "Orange", price: 1.29, image: "🍊", category: "Fruits", unit: "per lb", inStock: true },
  { id: "5", name: "Grapes", price: 2.99, image: "🍇", category: "Fruits", unit: "per lb", inStock: false },
  { id: "6", name: "Broccoli", price: 1.99, image: "🥦", category: "Vegetables", unit: "per head", inStock: true },
  { id: "7", name: "Carrots", price: 1.49, image: "🥕", category: "Vegetables", unit: "per lb", inStock: true },
  { id: "8", name: "Spinach", price: 2.49, image: "🥬", category: "Vegetables", unit: "per bag", inStock: true },
  { id: "9", name: "Bell Pepper", price: 1.79, image: "🫑", category: "Vegetables", unit: "each", inStock: true },
  { id: "10", name: "Tomato", price: 1.99, image: "🍅", category: "Vegetables", unit: "per lb", inStock: true },
  { id: "11", name: "Whole Milk", price: 3.49, image: "🥛", category: "Dairy", unit: "1 gallon", inStock: true },
  { id: "12", name: "Cheddar Cheese", price: 4.99, image: "🧀", category: "Dairy", unit: "8 oz", inStock: true },
  { id: "13", name: "Greek Yogurt", price: 5.49, image: "🫙", category: "Dairy", unit: "32 oz", inStock: true },
  { id: "14", name: "Butter", price: 3.99, image: "🧈", category: "Dairy", unit: "1 lb", inStock: true },
  { id: "15", name: "Eggs", price: 2.99, image: "🥚", category: "Dairy", unit: "dozen", inStock: false },
  { id: "16", name: "Potato Chips", price: 3.49, image: "🥔", category: "Snacks", unit: "per bag", inStock: true },
  { id: "17", name: "Cookies", price: 4.29, image: "🍪", category: "Snacks", unit: "per pack", inStock: true },
  { id: "18", name: "Popcorn", price: 2.99, image: "🍿", category: "Snacks", unit: "per bag", inStock: true },
  { id: "19", name: "Granola Bar", price: 3.79, image: "🥜", category: "Snacks", unit: "6 pack", inStock: true },
  { id: "20", name: "Chocolate", price: 2.49, image: "🍫", category: "Snacks", unit: "per bar", inStock: true },
];
