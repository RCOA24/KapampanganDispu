export type Category = 'Pampanga Classics' | 'Modern Fusion' | 'Beverages';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: Category;
  image?: string; // Adding image property for the card view later
}

export const MENU_ITEMS: MenuItem[] = [
  // Pampanga Classics
  {
    id: 1,
    name: 'Sisig Matua',
    description: 'Heritage recipe with pig ears, chicken liver, and calamansi. No mayo.',
    price: '₱380',
    category: 'Pampanga Classics',
    image: '/images/menu/sisig-matua.jpg'
  },
  {
    id: 2,
    name: 'Betute Tugak',
    description: 'Deep-fried farm frogs stuffed with seasoned ground pork.',
    price: '₱420',
    category: 'Pampanga Classics',
    image: '/images/menu/betute-tugak.jpg'
  },
  {
    id: 3,
    name: 'Bringhe',
    description: 'Kapampangan paella with glutinous rice, coconut milk, and turmeric.',
    price: '₱550',
    category: 'Pampanga Classics',
    image: '/images/menu/bringhe.jpg'
  },
  {
    id: 4,
    name: 'Pindang Damulag',
    description: 'Cured carabao beef tapa served with garlic rice and sukang sasa.',
    price: '₱390',
    category: 'Pampanga Classics',
    image: '/images/menu/pindang-damulag.jpg'
  },

  // Modern Fusion
  {
    id: 5,
    name: 'Foie Gras Sisig',
    description: 'Classic sisig topped with pan-seared duck liver and truffle oil.',
    price: '₱890',
    category: 'Modern Fusion',
    image: '/images/menu/foie-gras-sisig.jpg'
  },
  {
    id: 6,
    name: 'Kare-Kare Risotto',
    description: 'Creamy risotto infused with peanut sauce, topped with crispy bagnet.',
    price: '₱620',
    category: 'Modern Fusion',
    image: '/images/menu/kare-kare-risotto.jpg'
  },
  {
    id: 7,
    name: 'Aligue Pasta',
    description: 'Fresh fettuccine tossed in rich crab fat sauce with scallop seared.',
    price: '₱580',
    category: 'Modern Fusion',
    image: '/images/menu/aligue-pasta.jpg'
  },
  {
    id: 8,
    name: 'Tibok-Tibok Brulee',
    description: 'Carabao milk pudding with a caramelized sugar crust.',
    price: '₱250',
    category: 'Modern Fusion',
    image: '/images/menu/tibok-tibok.jpg'
  },

  // Beverages
  {
    id: 9,
    name: 'Tsokolate Batirol',
    description: 'Traditional hot chocolate whisked to frothy perfection.',
    price: '₱180',
    category: 'Beverages',
    image: '/images/menu/tsokolate-batirol.jpg'
  },
  {
    id: 10,
    name: 'Sasananas Highball',
    description: 'Nipa palm vinegar shrub, pineapple juice, and sparkling water.',
    price: '₱220',
    category: 'Beverages',
    image: '/images/menu/sasananas-highball.jpg'
  },
  {
    id: 11,
    name: 'Kapampangan Barako',
    description: 'Strong local Liberica coffee brewed single-origin.',
    price: '₱160',
    category: 'Beverages',
    image: '/images/menu/kapampangan-barako.jpg'
  },
  {
    id: 12,
    name: 'Tamarind Whiskey Sour',
    description: 'Local whiskey, fresh tamarind puree, egg white foam.',
    price: '₱350',
    category: 'Beverages',
    image: '/images/menu/tamarind-whiskey-sour.jpg'
  },
];
