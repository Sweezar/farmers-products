const productsList = [
  {
    id: 0,
    images: [
      {
        id: 0,
        src: "images/products/Chicken-thigh-fillet.png"
      },
      {
        id: 1,
        src: "images/products/Goose-thigh-fillet.png"
      },
      {
        id: 2,
        src: "images/products/Beef-thigh-flesh.webp"
      }
    ],
    title: "Филе бедра цыпленка",
    description:
      "Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
    weight: {
      kg: 0.7,
      g: "595 - 895"
    },
    expirationDate: 6,
    species: "КОББ 500",
    origin: "Тверская область",
    energyValue: {
      kc: 135,
      kj: 565
    },
    nutritionalValue: {
      proteins: "13.8",
      fats: "8.7",
      carbohydrates: "0"
    },
    price: 400
  },
  {
    id: 1,
    images: [
      {
        id: 1,
        src: "images/products/Goose-thigh-fillet.png"
      },
      {
        id: 2,
        src: "images/products/Beef-thigh-flesh.webp"
      },
      {
        id: 0,
        src: "images/products/Chicken-thigh-fillet.png"
      }
    ],
    title: "Филе бедра гуся",
    description:
      "Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.",
    weight: {
      kg: 0.6,
      g: "495 - 795"
    },
    expirationDate: 30,
    species: "КОББ 500",
    origin: "Московская область",
    energyValue: {
      kc: 135,
      kj: 565
    },
    nutritionalValue: {
      proteins: "13",
      fats: "37",
      carbohydrates: "0.25"
    },
    price: 500
  },
  {
    id: 2,
    images: [
      {
        id: 2,
        src: "images/products/Beef-thigh-flesh.webp"
      },
      {
        id: 0,
        src: "images/products/Chicken-thigh-fillet.png"
      },
      {
        id: 1,
        src: "images/products/Goose-thigh-fillet.png"
      }
    ],
    title: "Филе бедра индейки",
    description:
      "Филе бедра индейки - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.",
    weight: {
      kg: 0.5,
      g: "395 - 695"
    },
    expirationDate: 30,
    species: "КОББ 500",
    origin: "Республика Татарстан",
    energyValue: {
      kc: 135,
      kj: 565
    },
    nutritionalValue: {
      proteins: "18",
      fats: "20",
      carbohydrates: "0.25"
    },
    price: 600
  }
];

export default productsList;
