import { unsplashImages } from './unsplashImages';

export const infiniteScrollImages = unsplashImages.infiniteScroll.map((image, index) => ({
  id: index + 1,
  image,
  title: `Gallery ${index + 1}`,
}));