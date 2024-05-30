const { db } = require('../lib/db')

const getRandomPrice = () => {
  const PRICES = [9.99, 19.99, 29.99, 39.99, 49.99]
  return PRICES[Math.floor(Math.random() * PRICES.length)]
}

const COLORS = ['white', 'beige', 'blue', 'green', 'purple']


const getRandomSize = () =>{
  const SIZES = ['S', 'M', 'L'];
  return SIZES[Math.floor(Math.random() * SIZES.length)]
}

const filters = [
  {
    "name": "Категория",
    "type": "select",
    "options": [
      { "value": "mens", "label": "Мужская одежда" },
      { "value": "womens", "label": "Женская одежда" },
      { "value": "kids", "label": "Детская одежда" }
    ]
  },
  {
    "name": "Тип товара",
    "type": "select",
    "options": [
      { "value": "tshirts", "label": "Футболки и майки" },
      { "value": "shirts", "label": "Рубашки" },
      { "value": "sweaters", "label": "Свитера и кардиганы" },
      { "value": "dresses", "label": "Платья" },
      { "value": "pants", "label": "Брюки и джинсы" },
      { "value": "skirts", "label": "Юбки" },
      { "value": "shorts", "label": "Шорты" },
      { "value": "outerwear", "label": "Верхняя одежда" },
      { "value": "sportswear", "label": "Спортивная одежда" },
      { "value": "underwear", "label": "Нижнее белье" },
      { "value": "shoes", "label": "Обувь" },
      { "value": "accessories", "label": "Аксессуары" }
    ]
  },
  {
    "name": "Размер",
    "type": "select",
    "options": [
      { "value": "xs", "label": "XS" },
      { "value": "s", "label": "S" },
      { "value": "m", "label": "M" },
      { "value": "l", "label": "L" },
      { "value": "xl", "label": "XL" },
      { "value": "xxl", "label": "XXL" }
    ]
  },
  {
    "name": "Цвет",
    "type": "select",
    "options": [
      { "value": "white", "label": "Белый" },
      { "value": "black", "label": "Черный" },
      { "value": "blue", "label": "Синий" },
      { "value": "green", "label": "Зеленый" },
      { "value": "red", "label": "Красный" },
      { "value": "yellow", "label": "Желтый" },
      { "value": "other", "label": "Другие" }
    ]
  },
  {
    "name": "Цена",
    "type": "range",
    "min": 0,
    "max": 500,
    "step": 10
  },
  {
    "name": "Бренд",
    "type": "select",
    "options": [
      { "value": "nike", "label": "Nike" },
      { "value": "adidas", "label": "Adidas" },
      { "value": "zara", "label": "Zara" },
      { "value": "hm", "label": "H&M" },
      { "value": "local", "label": "Локальные бренды" }
    ]
  },
  {
    "name": "Материал",
    "type": "select",
    "options": [
      { "value": "cotton", "label": "Хлопок" },
      { "value": "polyester", "label": "Полиэстер" },
      { "value": "wool", "label": "Шерсть" },
      { "value": "leather", "label": "Кожа" },
      { "value": "denim", "label": "Деним" },
      { "value": "silk", "label": "Шелк" },
      { "value": "linen", "label": "Лён" }
    ]
  },
  {
    "name": "Сезон",
    "type": "select",
    "options": [
      { "value": "summer", "label": "Летняя одежда" },
      { "value": "winter", "label": "Зимняя одежда" },
      { "value": "demi-season", "label": "Демисезонная одежда" }
    ]
  },
  {
    "name": "Стиль",
    "type": "select",
    "options": [
      { "value": "classic", "label": "Классический" },
      { "value": "sport", "label": "Спортивный" },
      { "value": "casual", "label": "Повседневный (Casual)" },
      { "value": "business", "label": "Деловой (Business)" },
      { "value": "evening", "label": "Вечерний" }
    ]
  },
  {
    "name": "Узоры и принты",
    "type": "select",
    "options": [
      { "value": "solid", "label": "Однотонный" },
      { "value": "striped", "label": "Полоска" },
      { "value": "checked", "label": "Клетка" },
      { "value": "floral", "label": "Цветочный" },
      { "value": "polka-dot", "label": "Горошек" },
      { "value": "abstract", "label": "Абстрактный" }
    ]
  },
  {
    "name": "Акции и скидки",
    "type": "select",
    "options": [
      { "value": "discounted", "label": "Товары со скидкой" },
      { "value": "sale", "label": "Распродажа" },
      { "value": "new", "label": "Новинки" }
    ]
  },
  {
    "name": "Рейтинг и отзывы",
    "type": "select",
    "options": [
      { "value": "high-rating", "label": "Высокий рейтинг" },
      { "value": "with-reviews", "label": "С отзывами" }
    ]
  },
  {
    "name": "Производитель",
    "type": "select",
    "options": [
      { "value": "local", "label": "Локальные производители" },
      { "value": "international", "label": "Международные производители" }
    ]
  },
  {
    "name": "Особенности",
    "type": "select",
    "options": [
      { "value": "eco-friendly", "label": "Эко-материалы" },
      { "value": "waterproof", "label": "Водонепроницаемость" },
      { "value": "hypoallergenic", "label": "Антиаллергенные материалы" }
    ]
  },
  {
    "name": "Доставка",
    "type": "select",
    "options": [
      { "value": "fast", "label": "Быстрая доставка" },
      { "value": "free", "label": "Бесплатная доставка" }
    ]
  },
  {
    "name": "Длина одежды",
    "type": "select",
    "options": [
      { "value": "sleeve-length", "label": "Длина рукава" },
      { "value": "dress-length", "label": "Длина юбки/платья" },
      { "value": "pants-length", "label": "Длина брюк" }
    ]
  }
]

const seed = async () => {
  const dataFiltersOptions: { value: string; label: string }[] = []

  filters.forEach((element) => {
    element.options?.forEach((option) =>{
      dataFiltersOptions.push({
        value: option.value,
        label: option.label
      })
    })
  })

  await db.OptionsFilter.createMany({
    data: dataFiltersOptions
  })
}

seed()
