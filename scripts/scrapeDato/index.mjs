import { getImages, getVideos } from './getMedia.mjs';

console.log('Starting video scraping...');
getVideos();

console.log('Starting image scraping...');
getImages();
