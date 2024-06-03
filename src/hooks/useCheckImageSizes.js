import { useEffect } from 'react';

const useCheckImageSizes = () => {
  useEffect(() => {
    const testImages = [
      'https://via.placeholder.com/200', // 200x200 image
      'https://via.placeholder.com/300', // 300x300 image
    ];

    testImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        console.log(`Image: ${img.src}, Width: ${img.width}px, Height: ${img.height}px`);
        if (img.width > 200 || img.height > 200) {
          console.warn(`Image exceeds size limit: ${img.src}`);
        }
      };
    });

    // Original script to check all images in the DOM
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      console.log(`Image: ${img.src}, Width: ${img.width}px, Height: ${img.height}px`);
      if (img.width > 200 || img.height > 200) {
        console.warn(`Image exceeds size limit: ${img.src}`);
      }
    });
  }, []);
};

export default useCheckImageSizes;
