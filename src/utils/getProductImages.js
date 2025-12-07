// Функция для получения изображений товара по productId
export const getProductImages = (productId) => {
  const images = [];
  // В каждой папке product есть изображения 1.jpg, 2.jpg
  // Проверяем существование файлов (в реальном приложении можно использовать API)
  images.push(`/images/product${productId}/1.jpg`);
  images.push(`/images/product${productId}/2.jpg`);
  return images;
};

