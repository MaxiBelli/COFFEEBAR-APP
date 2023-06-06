const products = [
  {
    name: "Caramel Chocolate Coffee",
    price: 59.9,
    image: "coffee_01",
    categoryId: 1
  },
  {
    name: "Cold Chocolate Coffee (Large)",
    price: 49.9,
    image: "coffee_02",
    categoryId: 1
  },
  {
    name: "Cold Chocolate Latte (Large)",
    price: 54.9,
    image: "coffee_03",
    categoryId: 1
  },
  {
    name: "Cold Chocolate Latte (Large)",
    price: 54.9,
    image: "coffee_04",
    categoryId: 1
  },
  {
    name: "Cold Chocolate Milkshake (Large)",
    price: 54.9,
    image: "coffee_05",
    categoryId: 1
  },
  {
    name: "Hot Small Mocha Coffee",
    price: 39.9,
    image: "coffee_06",
    categoryId: 1
  },
  {
    name: "Hot Large Mocha Coffee with Chocolate",
    price: 59.9,
    image: "coffee_07",
    categoryId: 1
  },
  {
    name: "Hot Large Cappuccino Coffee",
    price: 59.9,
    image: "coffee_08",
    categoryId: 1
  },
  {
    name: "Hot Medium Mocha Coffee",
    price: 49.9,
    image: "coffee_09",
    categoryId: 1
  },
  {
    name: "Medium Caramel Cold Mocha Coffee",
    price: 49.9,
    image: "coffee_10",
    categoryId: 1
  },
  {
    name: "Medium Chocolate Cold Mocha Coffee",
    price: 49.9,
    image: "coffee_11",
    categoryId: 1
  },
  {
    name: "Espresso Coffee",
    price: 29.9,
    image: "coffee_12",
    categoryId: 1
  },
  {
    name: "Large Caramel Cappuccino Coffee",
    price: 59.9,
    image: "coffee_13",
    categoryId: 1
  },
  {
    name: "Large Caramel Coffee",
    price: 59.9,
    image: "coffee_14",
    categoryId: 1
  },
  {
    name: "Chocolate Donut Pack (3 Donuts)",
    price: 39.9,
    image: "donut_01",
    categoryId: 4
  },
  {
    name: "Glazed Donut Pack (3 Donuts)",
    price: 39.9,
    image: "donut_02",
    categoryId: 4
  },
  {
    name: "Strawberry Donut",
    price: 19.9,
    image: "donut_03",
    categoryId: 4
  },
  {
    name: "Chocolate Cookie Donut",
    price: 19.9,
    image: "donut_04",
    categoryId: 4
  },
  {
    name: "Strawberry Sprinkle Glazed Donut",
    price: 19.9,
    image: "donut_05",
    categoryId: 4
  },
  {
    name: "Chocolate Glazed Donut",
    price: 19.9,
    image: "donut_06",
    categoryId: 4
  },
  {
    name: "Double Chocolate Donut",
    price: 19.9,
    image: "donut_07",
    categoryId: 4
  },
  {
    name: "Chocolate Donut Pack (3 Donuts)",
    price: 39.9,
    image: "donut_08",
    categoryId: 4
  },
  {
    name: "Vanilla and Chocolate Donut Pack (3 Donuts)",
    price: 39.9,
    image: "donut_09",
    categoryId: 4
  },
  {
    name: "Assorted Donut Pack (6 Donuts)",
    price: 69.9,
    image: "donut_10",
    categoryId: 4
  },
  {
    name: "Mixed Donut Pack (3 Donuts)",
    price: 39.9,
    image: "donut_11",
    categoryId: 4
  },
  {
    name: "Natural Chocolate Donut",
    price: 19.9,
    image: "donut_12",
    categoryId: 4
  },
  {
    name: "Chocolate Sprinkle Donut Pack (3 Donuts)",
    price: 39.9,
    image: "donut_13",
    categoryId: 4
  },
  {
    name: "Chocolate and Coconut Donut",
    price: 19.9,
    image: "donut_14",
    categoryId: 4
  },
  {
    name: "Chocolate Cookies Pack",
    price: 29.9,
    image: "cookie_01",
    categoryId: 6
  },
  {
    name: "Chocolate and Oatmeal Cookies Pack",
    price: 39.9,
    image: "cookie_02",
    categoryId: 6
  },
  {
    name: "Vanilla Muffins Pack",
    price: 39.9,
    image: "cookie_03",
    categoryId: 6
  },
  {
    name: "Oatmeal Cookies Pack (4 Cookies)",
    price: 24.9,
    image: "cookie_04",
    categoryId: 6
  },
  {
    name: "Assorted Butter Cookies",
    price: 39.9,
    image: "cookie_05",
    categoryId: 6
  },
  {
    name: "Fruit Flavored Cookies",
    price: 39.9,
    image: "cookie_06",
    categoryId: 6
  },
  {
    name: "Plain Burger",
    price: 59.9,
    image: "hamburger_01",
    categoryId: 2
  },
  {
    name: "Chicken Burger",
    price: 59.9,
    image: "hamburger_02",
    categoryId: 2
  },
  {
    name: "Chicken and Chili Burger",
    price: 59.9,
    image: "hamburger_03",
    categoryId: 2
  },
  {
    name: "Cheese and Pickle Burger",
    price: 59.9,
    image: "hamburger_04",
    categoryId: 2
  },
  {
    name: "Quarter Pounder Burger",
    price: 59.9,
    image: "hamburger_05",
    categoryId: 2
  },
  {
    name: "Double Cheese Burger",
    price: 69.9,
    image: "hamburger_06",
    categoryId: 2
  },
  {
    name: "Special Hot Dog",
    price: 49.9,
    image: "hamburger_07",
    categoryId: 2
  },
  {
    name: "2 Hot Dogs Pack",
    price: 69.9,
    image: "hamburger_08",
    categoryId: 2
  },
  {
    name: "4 Slices of Cheesecake",
    price: 69.9,
    image: "cake_01",
    categoryId: 5
  },
  {
    name: "Special Waffle",
    price: 49.9,
    image: "cake_02",
    categoryId: 5
  },
  {
    name: "House Croissants",
    price: 39.9,
    image: "cake_03",
    categoryId: 5
  },
  {
    name: "Cheesecake Slice",
    price: 19.9,
    image: "cake_04",
    categoryId: 5
  },
  {
    name: "Chocolate Cake",
    price: 29.9,
    image: "cake_05",
    categoryId: 5
  },
  {
    name: "Chocolate Cake Slice",
    price: 29.9,
    image: "cake_06",
    categoryId: 5
  },
  {
    name: "Spicy Pizza with Double Cheese",
    price: 69.9,
    image: "pizza_01",
    categoryId: 3
  },
  {
    name: "Ham and Cheese Pizza",
    price: 69.9,
    image: "pizza_02",
    categoryId: 3
  },
  {
    name: "Double Cheese Pizza",
    price: 69.9,
    image: "pizza_03",
    categoryId: 3
  },
  {
    name: "Special House Pizza",
    price: 69.9,
    image: "pizza_04",
    categoryId: 3
  },
  {
    name: "Chorizo Pizza",
    price: 69.9,
    image: "pizza_05",
    categoryId: 3
  },
  {
    name: "Hawaiian Pizza",
    price: 69.9,
    image: "pizza_06",
    categoryId: 3
  },
  {
    name: "Bacon Pizza",
    price: 69.9,
    image: "pizza_07",
    categoryId: 3
  },
  {
    name: "Vegetable and Cheese Pizza",
    price: 69.9,
    image: "pizza_08",
    categoryId: 3
  },
  {
    name: "Pepperoni and Cheese Pizza",
    price: 69.9,
    image: "pizza_09",
    categoryId: 3
  },
  {
    name: "Olive and Cheese Pizza",
    price: 69.9,
    image: "pizza_10",
    categoryId: 3
  },
  {
    name: "Cheese, Ham, and Mushroom Pizza",
    price: 69.9,
    image: "pizza_11",
    categoryId: 3
  }
];

export { products };
