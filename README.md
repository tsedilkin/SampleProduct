# ZNWR Product Page Clone

Верстка-копия страницы продукта с сайта znwr.ru. Все данные товара, изображения и свойства вынесены в отдельные файлы для легкой замены.

## Структура проекта

```
Protorype1/
├── src/
│   ├── components/          # React компоненты
│   │   ├── ImageSlider/     # Слайдер изображений товара
│   │   ├── ProductInfo/     # Информация о товаре (цена, размеры, цвета)
│   │   ├── ProductDescription/  # Описание товара
│   │   ├── ModelParams/      # Параметры модели
│   │   ├── CompositionCare/  # Состав и уход
│   │   ├── BoutiqueAvailability/  # Наличие в бутиках
│   │   ├── SizeChart/       # Размерная сетка
│   │   ├── RelatedProducts/  # Похожие товары
│   │   └── ProductPage/      # Главная страница продукта
│   ├── data/                # Данные товара (замените на свои)
│   │   ├── productImages.js  # Массив путей к изображениям
│   │   ├── productData.js    # Основные данные товара
│   │   ├── boutiqueData.js   # Данные о бутиках
│   │   └── relatedProducts.js # Похожие товары
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev-сервер:
```bash
npm run dev
```

3. Соберите для продакшена:
```bash
npm run build
```

## Замена данных

### Изображения товара
Отредактируйте файл `src/data/productImages.js`:
```javascript
export const productImages = [
  '/images/your-image-1.jpg',
  '/images/your-image-2.jpg',
  // ... добавьте свои изображения
];
```

Поместите изображения в папку `public/images/` или укажите правильные пути.

### Данные товара
Отредактируйте файл `src/data/productData.js`:
- `name` - название товара
- `price` - цена
- `colors` - массив цветов
- `sizes` - доступные размеры
- `availableSizes` - размеры в наличии
- `description` - описание
- `features` - список особенностей
- `modelParams` - параметры модели
- `composition` - состав и уход
- `sizeChart` - размерная сетка

### Бутики
Отредактируйте файл `src/data/boutiqueData.js`:
```javascript
export const boutiqueData = [
  {
    city: 'Город',
    name: 'Название бутика',
    address: 'Адрес',
    phone: '+7 (xxx) xxx-xx-xx',
    sizes: {
      'XS': количество,
      'S': количество,
      // ...
    }
  }
];
```

### Похожие товары
Отредактируйте файл `src/data/relatedProducts.js`:
```javascript
export const relatedProducts = [
  {
    id: '1',
    name: 'Название товара',
    price: 10000,
    image: '/images/product-1.jpg'
  }
];
```

## Компоненты

Все компоненты изолированы и могут быть легко модифицированы:
- Каждый компонент имеет свою папку с `.jsx` и `.css` файлами
- Стили максимально приближены к оригинальному дизайну
- Компоненты принимают данные через props

## Технологии

- React 18
- Vite
- CSS (без дополнительных библиотек)

## Примечания

- Изображения по умолчанию используют placeholder, если файлы не найдены
- Все тексты на русском языке
- Стили адаптивны для мобильных устройств

