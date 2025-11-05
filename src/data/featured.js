import { unsplashImages } from './unsplashImages';

export const featuredImages = unsplashImages.featured.map((image, index) => ({
  id: index + 1,
  image,
  title: `Featured Work ${index + 1}`,
  category: ['Wedding', 'Pre-Wedding', 'Couple', 'Events'][index % 4],
}));