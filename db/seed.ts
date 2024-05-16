const { db } = require("../lib/db")

const getRandomPrice = () => {
  const PRICES = [9.99, 19.99, 29.99, 39.99, 49.99]
  return PRICES[Math.floor(Math.random() * PRICES.length)]
}



const COLORS = ['white', 'beige', 'blue', 'green', 'purple']
const SIZES = ['S', 'M', 'L']

const seed = async () => {
  const products = []

  // 3 example products
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < COLORS.length; j++) {
      for (let k = 0; k < SIZES.length; k++) {
        const size = SIZES[k]
        const color = COLORS[j]
        products.push({
          imageId: `/${color}_${i + 1}.png`,
          color,
          name: `${
            color.slice(0, 1).toUpperCase() + color.slice(1)
          } shirt ${i}`,
          size,
          price: getRandomPrice(),
        })
      }
    }
  }

  const cardProduct = await db.cardProductStore.createMany({
    data: [products]
  })
}


seed();
