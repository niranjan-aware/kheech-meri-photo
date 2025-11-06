import { unsplashImages } from './unsplashImages';

export const galleryCategories = [
  { id: 'all', label: 'All Work', count: 170 },
  { id: 'pre-wedding', label: 'Pre-Wedding', count: 25 },
  { id: 'wedding', label: 'Wedding', count: 40 },
  { id: 'couple', label: 'Couple Shoots', count: 20 },
  { id: 'events-corporate', label: 'Events & Corporate', count: 30 },
  { id: 'products-gifts', label: 'Products & Gifts', count: 20 },
  { id: 'makeup-styling', label: 'Makeup & Mehandi', count: 20 },
  { id: 'catering', label: 'Catering', count: 15 },
];

export const galleryImages = [
  ...unsplashImages.preWedding.map((image, index) => ({
    id: `pw-${index + 1}`,
    image,
    title: `Pre-Wedding ${index + 1}`,
    category: 'pre-wedding',
  })),
  ...unsplashImages.wedding.map((image, index) => ({
    id: `w-${index + 1}`,
    image,
    title: `Wedding ${index + 1}`,
    category: 'wedding',
  })),
  ...unsplashImages.couple.map((image, index) => ({
    id: `c-${index + 1}`,
    image,
    title: `Couple ${index + 1}`,
    category: 'couple',
  })),
  ...unsplashImages.events.map((image, index) => ({
    id: `ec-${index + 1}`,
    image,
    title: `Event ${index + 1}`,
    category: 'events-corporate',
  })),
  ...unsplashImages.products.map((image, index) => ({
    id: `pg-${index + 1}`,
    image,
    title: `Product ${index + 1}`,
    category: 'products-gifts',
  })),
  ...unsplashImages.makeup.map((image, index) => ({
    id: `ms-${index + 1}`,
    image,
    title: `Makeup ${index + 1}`,
    category: 'makeup-styling',
  })),
  ...unsplashImages.catering.map((image, index) => ({
    id: `cat-${index + 1}`,
    image,
    title: `Catering ${index + 1}`,
    category: 'catering',
  })),
];