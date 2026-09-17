import type { FoodItem } from "../types";

export const foodItems: FoodItem[] = [
  {
    "id": "f1",
    "restaurantId": "r1",
    "name": "Classic Cheese Burger",
    "description": "Juicy beef patty, melted cheddar, lettuce, tomato and house sauce.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=75",
    "price": 149,
    "dietType": "non-veg",
    "category": "Burgers",
    "rating": 4,
    "bestseller": true,
    "ingredients": [
      "Juicy",
      "patty,",
      "melted",
      "cheddar,",
      "lettuce,"
    ]
  },
  {
    "id": "f2",
    "restaurantId": "r1",
    "name": "Veg Crunch Burger",
    "description": "Crispy vegetable patty with mayo and fresh veggies.",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=75",
    "price": 119,
    "dietType": "veg",
    "category": "Burgers",
    "rating": 4.3,
    "bestseller": false,
    "ingredients": [
      "Crispy",
      "vegetable",
      "patty",
      "fresh",
      "veggies."
    ]
  },
  {
    "id": "f3",
    "restaurantId": "r1",
    "name": "Double Patty Loaded",
    "description": "Two beef patties, double cheese, caramelised onions.",
    "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=75",
    "price": 219,
    "dietType": "non-veg",
    "category": "Burgers",
    "rating": 4.7,
    "bestseller": true,
    "ingredients": [
      "patties,",
      "double",
      "cheese,",
      "caramelised",
      "onions."
    ]
  },
  {
    "id": "f4",
    "restaurantId": "r1",
    "name": "Peri Peri Chicken Burger",
    "description": "Grilled chicken patty tossed in peri peri spice.",
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=75",
    "price": 169,
    "dietType": "non-veg",
    "category": "Burgers",
    "rating": 4.5,
    "bestseller": true,
    "ingredients": [
      "Grilled",
      "chicken",
      "patty",
      "tossed",
      "spice."
    ]
  },
  {
    "id": "f5",
    "restaurantId": "r1",
    "name": "Loaded Fries",
    "description": "Crispy fries topped with cheese sauce and jalapenos.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=75",
    "price": 99,
    "dietType": "veg",
    "category": "Starters",
    "rating": 4.7,
    "bestseller": false,
    "ingredients": [
      "Crispy",
      "fries",
      "topped",
      "cheese",
      "sauce"
    ]
  },
  {
    "id": "f6",
    "restaurantId": "r2",
    "name": "Butter Chicken",
    "description": "Tender chicken simmered in a rich buttery tomato gravy.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=75",
    "price": 289,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4.8,
    "bestseller": false,
    "ingredients": [
      "Tender",
      "chicken",
      "simmered",
      "buttery",
      "tomato"
    ]
  },
  {
    "id": "f7",
    "restaurantId": "r2",
    "name": "Paneer Butter Masala",
    "description": "Cottage cheese cubes in a creamy tomato-cashew gravy.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=75",
    "price": 239,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4.9,
    "bestseller": false,
    "ingredients": [
      "Cottage",
      "cheese",
      "cubes",
      "creamy",
      "tomato-cashew"
    ]
  },
  {
    "id": "f8",
    "restaurantId": "r2",
    "name": "Dal Makhani",
    "description": "Slow-cooked black lentils finished with cream and butter.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=75",
    "price": 189,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4,
    "bestseller": false,
    "ingredients": [
      "Slow-cooked",
      "black",
      "lentils",
      "finished",
      "cream"
    ]
  },
  {
    "id": "f9",
    "restaurantId": "r2",
    "name": "Tandoori Roti (2 pc)",
    "description": "Whole wheat bread baked in a clay tandoor.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&w=500&q=75",
    "price": 40,
    "dietType": "veg",
    "category": "Main Course",
    "rating": 4.4,
    "bestseller": true,
    "ingredients": [
      "Whole",
      "wheat",
      "bread",
      "baked",
      "tandoor."
    ]
  },
  {
    "id": "f10",
    "restaurantId": "r2",
    "name": "Chicken Seekh Kebab",
    "description": "Minced chicken skewers grilled over charcoal.",
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=75",
    "price": 229,
    "dietType": "non-veg",
    "category": "Starters",
    "rating": 4.3,
    "bestseller": false,
    "ingredients": [
      "Minced",
      "chicken",
      "skewers",
      "grilled",
      "charcoal."
    ]
  },
  {
    "id": "f11",
    "restaurantId": "r3",
    "name": "Chicken Dum Biryani",
    "description": "Fragrant basmati rice layered with spiced chicken, dum-cooked.",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=75",
    "price": 259,
    "dietType": "non-veg",
    "category": "Biryani",
    "rating": 4,
    "bestseller": true,
    "ingredients": [
      "Fragrant",
      "basmati",
      "layered",
      "spiced",
      "chicken,"
    ]
  },
  {
    "id": "f12",
    "restaurantId": "r3",
    "name": "Mutton Biryani",
    "description": "Slow-cooked mutton and rice sealed in a handi pot.",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=75",
    "price": 329,
    "dietType": "non-veg",
    "category": "Biryani",
    "rating": 3.9,
    "bestseller": false,
    "ingredients": [
      "Slow-cooked",
      "mutton",
      "sealed",
      "handi"
    ]
  },
  {
    "id": "f13",
    "restaurantId": "r3",
    "name": "Veg Biryani",
    "description": "Mixed vegetables and basmati rice with warm biryani spice.",
    "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=75",
    "price": 189,
    "dietType": "veg",
    "category": "Biryani",
    "rating": 4.4,
    "bestseller": false,
    "ingredients": [
      "Mixed",
      "vegetables",
      "basmati",
      "biryani",
      "spice."
    ]
  },
  {
    "id": "f14",
    "restaurantId": "r3",
    "name": "Egg Biryani",
    "description": "Boiled eggs tossed through fragrant dum biryani rice.",
    "image": "https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=500&q=75",
    "price": 199,
    "dietType": "egg",
    "category": "Biryani",
    "rating": 4.4,
    "bestseller": false,
    "ingredients": [
      "Boiled",
      "tossed",
      "through",
      "fragrant",
      "biryani"
    ]
  },
  {
    "id": "f15",
    "restaurantId": "r3",
    "name": "Raita",
    "description": "Cool yoghurt with cucumber and mild spice.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=75",
    "price": 49,
    "dietType": "veg",
    "category": "Starters",
    "rating": 4,
    "bestseller": false,
    "ingredients": [
      "yoghurt",
      "cucumber",
      "spice."
    ]
  },
  {
    "id": "f16",
    "restaurantId": "r4",
    "name": "Margherita Pizza",
    "description": "Classic tomato, mozzarella and fresh basil on a thin crust.",
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=75",
    "price": 229,
    "dietType": "veg",
    "category": "Pizza",
    "rating": 3.9,
    "bestseller": false,
    "ingredients": [
      "Classic",
      "tomato,",
      "mozzarella",
      "fresh",
      "basil"
    ]
  },
  {
    "id": "f17",
    "restaurantId": "r4",
    "name": "Farmhouse Pizza",
    "description": "Loaded with capsicum, onion, tomato and sweet corn.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=75",
    "price": 279,
    "dietType": "veg",
    "category": "Pizza",
    "rating": 4.9,
    "bestseller": true,
    "ingredients": [
      "Loaded",
      "capsicum,",
      "onion,",
      "tomato",
      "sweet"
    ]
  },
  {
    "id": "f18",
    "restaurantId": "r4",
    "name": "Chicken Pepperoni Pizza",
    "description": "Spicy pepperoni and mozzarella on a wood-fired base.",
    "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=75",
    "price": 349,
    "dietType": "non-veg",
    "category": "Pizza",
    "rating": 4.2,
    "bestseller": false,
    "ingredients": [
      "Spicy",
      "pepperoni",
      "mozzarella",
      "wood-fired",
      "base."
    ]
  },
  {
    "id": "f19",
    "restaurantId": "r4",
    "name": "Cheese Garlic Bread",
    "description": "Toasted bread loaded with garlic butter and cheese.",
    "image": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=500&q=75",
    "price": 129,
    "dietType": "veg",
    "category": "Starters",
    "rating": 4.7,
    "bestseller": false,
    "ingredients": [
      "Toasted",
      "bread",
      "loaded",
      "garlic",
      "butter"
    ]
  },
  {
    "id": "f20",
    "restaurantId": "r4",
    "name": "Peri Peri Chicken Pizza",
    "description": "Grilled chicken chunks with a fiery peri peri drizzle.",
    "image": "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=500&q=75",
    "price": 359,
    "dietType": "non-veg",
    "category": "Pizza",
    "rating": 4.6,
    "bestseller": true,
    "ingredients": [
      "Grilled",
      "chicken",
      "chunks",
      "fiery",
      "drizzle."
    ]
  },
  {
    "id": "f21",
    "restaurantId": "r5",
    "name": "Chicken Shawarma Plate",
    "description": "Rolled chicken shawarma served with garlic sauce and fries.",
    "image": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=75",
    "price": 249,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4,
    "bestseller": false,
    "ingredients": [
      "Rolled",
      "chicken",
      "shawarma",
      "served",
      "garlic"
    ]
  },
  {
    "id": "f22",
    "restaurantId": "r5",
    "name": "Mixed Grill Platter",
    "description": "Chicken tikka, seekh kebab and grilled veggies.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=75",
    "price": 379,
    "dietType": "non-veg",
    "category": "Starters",
    "rating": 4.5,
    "bestseller": true,
    "ingredients": [
      "Chicken",
      "tikka,",
      "seekh",
      "kebab",
      "grilled"
    ]
  },
  {
    "id": "f23",
    "restaurantId": "r5",
    "name": "Falafel Wrap",
    "description": "Crispy falafel with tahini, pickles and fresh salad.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=75",
    "price": 179,
    "dietType": "veg",
    "category": "Main Course",
    "rating": 4.6,
    "bestseller": true,
    "ingredients": [
      "Crispy",
      "falafel",
      "tahini,",
      "pickles",
      "fresh"
    ]
  },
  {
    "id": "f24",
    "restaurantId": "r5",
    "name": "Hummus with Pita",
    "description": "Creamy chickpea hummus served with warm pita bread.",
    "image": "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=500&q=75",
    "price": 139,
    "dietType": "veg",
    "category": "Starters",
    "rating": 4.2,
    "bestseller": false,
    "ingredients": [
      "Creamy",
      "chickpea",
      "hummus",
      "served",
      "bread."
    ]
  },
  {
    "id": "f25",
    "restaurantId": "r5",
    "name": "Chicken Kunafa Wrap",
    "description": "Grilled chicken wrap with a hint of Arabian spice.",
    "image": "https://images.unsplash.com/photo-1633945274309-2c6c7f0e1f9e?auto=format&fit=crop&w=500&q=75",
    "price": 219,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4.7,
    "bestseller": true,
    "ingredients": [
      "Grilled",
      "chicken",
      "Arabian",
      "spice."
    ]
  },
  {
    "id": "f26",
    "restaurantId": "r6",
    "name": "Masala Dosa",
    "description": "Crisp rice crepe filled with spiced potato masala.",
    "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=500&q=75",
    "price": 99,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 3.8,
    "bestseller": false,
    "ingredients": [
      "Crisp",
      "crepe",
      "filled",
      "spiced",
      "potato"
    ]
  },
  {
    "id": "f27",
    "restaurantId": "r6",
    "name": "Idli Sambar (4 pc)",
    "description": "Steamed rice cakes served with sambar and chutney.",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=75",
    "price": 79,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4.5,
    "bestseller": false,
    "ingredients": [
      "Steamed",
      "cakes",
      "served",
      "sambar",
      "chutney."
    ]
  },
  {
    "id": "f28",
    "restaurantId": "r6",
    "name": "Ghee Podi Dosa",
    "description": "Crisp dosa brushed with ghee and spiced podi.",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=75",
    "price": 109,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4.2,
    "bestseller": false,
    "ingredients": [
      "Crisp",
      "brushed",
      "spiced",
      "podi."
    ]
  },
  {
    "id": "f29",
    "restaurantId": "r6",
    "name": "Filter Coffee",
    "description": "South Indian filter coffee, brewed strong and frothy.",
    "image": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=500&q=75",
    "price": 49,
    "dietType": "veg",
    "category": "Beverages",
    "rating": 4.5,
    "bestseller": false,
    "ingredients": [
      "South",
      "Indian",
      "filter",
      "coffee,",
      "brewed"
    ]
  },
  {
    "id": "f30",
    "restaurantId": "r6",
    "name": "Curd Rice",
    "description": "Comfort rice tempered with mustard and curry leaves.",
    "image": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=500&q=75",
    "price": 89,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4.4,
    "bestseller": false,
    "ingredients": [
      "Comfort",
      "tempered",
      "mustard",
      "curry",
      "leaves."
    ]
  },
  {
    "id": "f31",
    "restaurantId": "r7",
    "name": "Veg Hakka Noodles",
    "description": "Stir-fried noodles tossed with fresh vegetables.",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=75",
    "price": 159,
    "dietType": "veg",
    "category": "Main Course",
    "rating": 4.7,
    "bestseller": true,
    "ingredients": [
      "Stir-fried",
      "noodles",
      "tossed",
      "fresh",
      "vegetables."
    ]
  },
  {
    "id": "f32",
    "restaurantId": "r7",
    "name": "Chicken Fried Rice",
    "description": "Wok-tossed rice with chicken, egg and spring onion.",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=75",
    "price": 189,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4.4,
    "bestseller": false,
    "ingredients": [
      "Wok-tossed",
      "chicken,",
      "spring",
      "onion."
    ]
  },
  {
    "id": "f33",
    "restaurantId": "r7",
    "name": "Chilli Chicken",
    "description": "Crispy chicken tossed in a spicy soy-chilli glaze.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cee6a7?auto=format&fit=crop&w=500&q=75",
    "price": 219,
    "dietType": "non-veg",
    "category": "Starters",
    "rating": 4.4,
    "bestseller": false,
    "ingredients": [
      "Crispy",
      "chicken",
      "tossed",
      "spicy",
      "soy-chilli"
    ]
  },
  {
    "id": "f34",
    "restaurantId": "r7",
    "name": "Veg Manchurian",
    "description": "Fried vegetable balls in a tangy Indo-Chinese sauce.",
    "image": "https://images.unsplash.com/photo-1585032226647-06ba38977ce8?auto=format&fit=crop&w=500&q=75",
    "price": 169,
    "dietType": "veg",
    "category": "Starters",
    "rating": 4.6,
    "bestseller": false,
    "ingredients": [
      "Fried",
      "vegetable",
      "balls",
      "tangy",
      "Indo-Chinese"
    ]
  },
  {
    "id": "f35",
    "restaurantId": "r7",
    "name": "Chicken Dumplings (6 pc)",
    "description": "Steamed dumplings filled with minced chicken.",
    "image": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=500&q=75",
    "price": 199,
    "dietType": "non-veg",
    "category": "Starters",
    "rating": 4.5,
    "bestseller": false,
    "ingredients": [
      "Steamed",
      "dumplings",
      "filled",
      "minced",
      "chicken."
    ]
  },
  {
    "id": "f36",
    "restaurantId": "r8",
    "name": "Classic Chicken Shawarma",
    "description": "Rolled pita with grilled chicken, garlic sauce and pickles.",
    "image": "https://images.unsplash.com/photo-1633945274309-2c6c7f0e1f9e?auto=format&fit=crop&w=500&q=75",
    "price": 139,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4.5,
    "bestseller": false,
    "ingredients": [
      "Rolled",
      "grilled",
      "chicken,",
      "garlic",
      "sauce"
    ]
  },
  {
    "id": "f37",
    "restaurantId": "r8",
    "name": "Beef Shawarma Roll",
    "description": "Spiced beef shavings rolled with fresh salad.",
    "image": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=75",
    "price": 159,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4.2,
    "bestseller": false,
    "ingredients": [
      "Spiced",
      "shavings",
      "rolled",
      "fresh",
      "salad."
    ]
  },
  {
    "id": "f38",
    "restaurantId": "r8",
    "name": "Shawarma Platter",
    "description": "Shawarma served with rice, salad and garlic dip.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=75",
    "price": 229,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4.3,
    "bestseller": true,
    "ingredients": [
      "Shawarma",
      "served",
      "rice,",
      "salad",
      "garlic"
    ]
  },
  {
    "id": "f39",
    "restaurantId": "r8",
    "name": "Falafel Shawarma",
    "description": "Crispy falafel rolled with tahini and fresh veggies.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=75",
    "price": 129,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4.8,
    "bestseller": false,
    "ingredients": [
      "Crispy",
      "falafel",
      "rolled",
      "tahini",
      "fresh"
    ]
  },
  {
    "id": "f40",
    "restaurantId": "r8",
    "name": "Garlic Fries",
    "description": "Fries tossed in garlic butter and herbs.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=75",
    "price": 89,
    "dietType": "veg",
    "category": "Starters",
    "rating": 3.8,
    "bestseller": false,
    "ingredients": [
      "Fries",
      "tossed",
      "garlic",
      "butter",
      "herbs."
    ]
  },
  {
    "id": "f41",
    "restaurantId": "r9",
    "name": "Chocolate Lava Cake",
    "description": "Warm chocolate cake with a molten centre.",
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=75",
    "price": 129,
    "dietType": "veg",
    "category": "Desserts",
    "rating": 3.9,
    "bestseller": true,
    "ingredients": [
      "chocolate",
      "molten",
      "centre."
    ]
  },
  {
    "id": "f42",
    "restaurantId": "r9",
    "name": "New York Cheesecake",
    "description": "Creamy baked cheesecake with a biscuit base.",
    "image": "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=500&q=75",
    "price": 159,
    "dietType": "veg",
    "category": "Desserts",
    "rating": 4.2,
    "bestseller": true,
    "ingredients": [
      "Creamy",
      "baked",
      "cheesecake",
      "biscuit",
      "base."
    ]
  },
  {
    "id": "f43",
    "restaurantId": "r9",
    "name": "Belgian Waffle",
    "description": "Crisp waffle topped with maple syrup and ice cream.",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=500&q=75",
    "price": 179,
    "dietType": "veg",
    "category": "Desserts",
    "rating": 4.3,
    "bestseller": true,
    "ingredients": [
      "Crisp",
      "waffle",
      "topped",
      "maple",
      "syrup"
    ]
  },
  {
    "id": "f44",
    "restaurantId": "r9",
    "name": "Brownie Sundae",
    "description": "Warm brownie with vanilla ice cream and chocolate sauce.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=75",
    "price": 149,
    "dietType": "veg",
    "category": "Desserts",
    "rating": 4.8,
    "bestseller": false,
    "ingredients": [
      "brownie",
      "vanilla",
      "cream",
      "chocolate",
      "sauce."
    ]
  },
  {
    "id": "f45",
    "restaurantId": "r9",
    "name": "Cold Coffee Shake",
    "description": "Chilled coffee blended with ice cream.",
    "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=75",
    "price": 99,
    "dietType": "veg",
    "category": "Beverages",
    "rating": 4.1,
    "bestseller": false,
    "ingredients": [
      "Chilled",
      "coffee",
      "blended",
      "cream."
    ]
  },
  {
    "id": "f46",
    "restaurantId": "r10",
    "name": "BBQ Chicken Platter",
    "description": "Smoky grilled chicken with barbecue glaze.",
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=500&q=75",
    "price": 289,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4.2,
    "bestseller": true,
    "ingredients": [
      "Smoky",
      "grilled",
      "chicken",
      "barbecue",
      "glaze."
    ]
  },
  {
    "id": "f47",
    "restaurantId": "r10",
    "name": "Paneer Tikka",
    "description": "Charred cottage cheese cubes marinated in tandoor spice.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=500&q=75",
    "price": 219,
    "dietType": "veg",
    "category": "Starters",
    "rating": 4.2,
    "bestseller": false,
    "ingredients": [
      "Charred",
      "cottage",
      "cheese",
      "cubes",
      "marinated"
    ]
  },
  {
    "id": "f48",
    "restaurantId": "r10",
    "name": "Mutton Sizzler",
    "description": "Grilled mutton chunks served on a sizzling plate.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265948?auto=format&fit=crop&w=500&q=75",
    "price": 349,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4.3,
    "bestseller": false,
    "ingredients": [
      "Grilled",
      "mutton",
      "chunks",
      "served",
      "sizzling"
    ]
  },
  {
    "id": "f49",
    "restaurantId": "r10",
    "name": "Corn on the Cob",
    "description": "Grilled corn brushed with butter and spice.",
    "image": "https://images.unsplash.com/photo-1601001435957-08246d5b04b0?auto=format&fit=crop&w=500&q=75",
    "price": 89,
    "dietType": "veg",
    "category": "Starters",
    "rating": 4.1,
    "bestseller": false,
    "ingredients": [
      "Grilled",
      "brushed",
      "butter",
      "spice."
    ]
  },
  {
    "id": "f50",
    "restaurantId": "r10",
    "name": "Smoked Chicken Wings",
    "description": "Charcoal-smoked wings tossed in a tangy glaze.",
    "image": "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=500&q=75",
    "price": 229,
    "dietType": "non-veg",
    "category": "Starters",
    "rating": 4,
    "bestseller": true,
    "ingredients": [
      "Charcoal-smoked",
      "wings",
      "tossed",
      "tangy",
      "glaze."
    ]
  },
  {
    "id": "f51",
    "restaurantId": "r11",
    "name": "Masala Dosa",
    "description": "Crisp rice crepe filled with spiced potato masala.",
    "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=500&q=75",
    "price": 99,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4.2,
    "bestseller": false,
    "ingredients": [
      "Crisp",
      "crepe",
      "filled",
      "spiced",
      "potato"
    ]
  },
  {
    "id": "f52",
    "restaurantId": "r11",
    "name": "Idli Sambar (4 pc)",
    "description": "Steamed rice cakes served with sambar and chutney.",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=75",
    "price": 79,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4,
    "bestseller": false,
    "ingredients": [
      "Steamed",
      "cakes",
      "served",
      "sambar",
      "chutney."
    ]
  },
  {
    "id": "f53",
    "restaurantId": "r11",
    "name": "Ghee Podi Dosa",
    "description": "Crisp dosa brushed with ghee and spiced podi.",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=75",
    "price": 109,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4.3,
    "bestseller": false,
    "ingredients": [
      "Crisp",
      "brushed",
      "spiced",
      "podi."
    ]
  },
  {
    "id": "f54",
    "restaurantId": "r11",
    "name": "Filter Coffee",
    "description": "South Indian filter coffee, brewed strong and frothy.",
    "image": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=500&q=75",
    "price": 49,
    "dietType": "veg",
    "category": "Beverages",
    "rating": 4.5,
    "bestseller": false,
    "ingredients": [
      "South",
      "Indian",
      "filter",
      "coffee,",
      "brewed"
    ]
  },
  {
    "id": "f55",
    "restaurantId": "r11",
    "name": "Curd Rice",
    "description": "Comfort rice tempered with mustard and curry leaves.",
    "image": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=500&q=75",
    "price": 89,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4.7,
    "bestseller": false,
    "ingredients": [
      "Comfort",
      "tempered",
      "mustard",
      "curry",
      "leaves."
    ]
  },
  {
    "id": "f56",
    "restaurantId": "r12",
    "name": "Veg Hakka Noodles",
    "description": "Stir-fried noodles tossed with fresh vegetables.",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=75",
    "price": 159,
    "dietType": "veg",
    "category": "Main Course",
    "rating": 4.1,
    "bestseller": true,
    "ingredients": [
      "Stir-fried",
      "noodles",
      "tossed",
      "fresh",
      "vegetables."
    ]
  },
  {
    "id": "f57",
    "restaurantId": "r12",
    "name": "Chicken Fried Rice",
    "description": "Wok-tossed rice with chicken, egg and spring onion.",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=75",
    "price": 189,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4.2,
    "bestseller": false,
    "ingredients": [
      "Wok-tossed",
      "chicken,",
      "spring",
      "onion."
    ]
  },
  {
    "id": "f58",
    "restaurantId": "r12",
    "name": "Chilli Chicken",
    "description": "Crispy chicken tossed in a spicy soy-chilli glaze.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cee6a7?auto=format&fit=crop&w=500&q=75",
    "price": 219,
    "dietType": "non-veg",
    "category": "Starters",
    "rating": 4.8,
    "bestseller": false,
    "ingredients": [
      "Crispy",
      "chicken",
      "tossed",
      "spicy",
      "soy-chilli"
    ]
  },
  {
    "id": "f59",
    "restaurantId": "r12",
    "name": "Veg Manchurian",
    "description": "Fried vegetable balls in a tangy Indo-Chinese sauce.",
    "image": "https://images.unsplash.com/photo-1585032226647-06ba38977ce8?auto=format&fit=crop&w=500&q=75",
    "price": 169,
    "dietType": "veg",
    "category": "Starters",
    "rating": 4.7,
    "bestseller": false,
    "ingredients": [
      "Fried",
      "vegetable",
      "balls",
      "tangy",
      "Indo-Chinese"
    ]
  },
  {
    "id": "f60",
    "restaurantId": "r12",
    "name": "Chicken Dumplings (6 pc)",
    "description": "Steamed dumplings filled with minced chicken.",
    "image": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=500&q=75",
    "price": 199,
    "dietType": "non-veg",
    "category": "Starters",
    "rating": 4.4,
    "bestseller": true,
    "ingredients": [
      "Steamed",
      "dumplings",
      "filled",
      "minced",
      "chicken."
    ]
  },
  {
    "id": "f61",
    "restaurantId": "r13",
    "name": "Butter Chicken",
    "description": "Tender chicken simmered in a rich buttery tomato gravy.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=75",
    "price": 289,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 4.3,
    "bestseller": false,
    "ingredients": [
      "Tender",
      "chicken",
      "simmered",
      "buttery",
      "tomato"
    ]
  },
  {
    "id": "f62",
    "restaurantId": "r13",
    "name": "Paneer Butter Masala",
    "description": "Cottage cheese cubes in a creamy tomato-cashew gravy.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=75",
    "price": 239,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4.3,
    "bestseller": false,
    "ingredients": [
      "Cottage",
      "cheese",
      "cubes",
      "creamy",
      "tomato-cashew"
    ]
  },
  {
    "id": "f63",
    "restaurantId": "r13",
    "name": "Dal Makhani",
    "description": "Slow-cooked black lentils finished with cream and butter.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=75",
    "price": 189,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4.5,
    "bestseller": false,
    "ingredients": [
      "Slow-cooked",
      "black",
      "lentils",
      "finished",
      "cream"
    ]
  },
  {
    "id": "f64",
    "restaurantId": "r13",
    "name": "Tandoori Roti (2 pc)",
    "description": "Whole wheat bread baked in a clay tandoor.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&w=500&q=75",
    "price": 40,
    "dietType": "veg",
    "category": "Main Course",
    "rating": 4,
    "bestseller": false,
    "ingredients": [
      "Whole",
      "wheat",
      "bread",
      "baked",
      "tandoor."
    ]
  },
  {
    "id": "f65",
    "restaurantId": "r13",
    "name": "Chicken Seekh Kebab",
    "description": "Minced chicken skewers grilled over charcoal.",
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=75",
    "price": 229,
    "dietType": "non-veg",
    "category": "Starters",
    "rating": 4.7,
    "bestseller": true,
    "ingredients": [
      "Minced",
      "chicken",
      "skewers",
      "grilled",
      "charcoal."
    ]
  },
  {
    "id": "f66",
    "restaurantId": "r14",
    "name": "Chocolate Lava Cake",
    "description": "Warm chocolate cake with a molten centre.",
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=75",
    "price": 129,
    "dietType": "veg",
    "category": "Desserts",
    "rating": 3.9,
    "bestseller": false,
    "ingredients": [
      "chocolate",
      "molten",
      "centre."
    ]
  },
  {
    "id": "f67",
    "restaurantId": "r14",
    "name": "New York Cheesecake",
    "description": "Creamy baked cheesecake with a biscuit base.",
    "image": "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=500&q=75",
    "price": 159,
    "dietType": "veg",
    "category": "Desserts",
    "rating": 4.1,
    "bestseller": false,
    "ingredients": [
      "Creamy",
      "baked",
      "cheesecake",
      "biscuit",
      "base."
    ]
  },
  {
    "id": "f68",
    "restaurantId": "r14",
    "name": "Belgian Waffle",
    "description": "Crisp waffle topped with maple syrup and ice cream.",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=500&q=75",
    "price": 179,
    "dietType": "veg",
    "category": "Desserts",
    "rating": 4.6,
    "bestseller": false,
    "ingredients": [
      "Crisp",
      "waffle",
      "topped",
      "maple",
      "syrup"
    ]
  },
  {
    "id": "f69",
    "restaurantId": "r14",
    "name": "Brownie Sundae",
    "description": "Warm brownie with vanilla ice cream and chocolate sauce.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=75",
    "price": 149,
    "dietType": "veg",
    "category": "Desserts",
    "rating": 4.5,
    "bestseller": false,
    "ingredients": [
      "brownie",
      "vanilla",
      "cream",
      "chocolate",
      "sauce."
    ]
  },
  {
    "id": "f70",
    "restaurantId": "r14",
    "name": "Cold Coffee Shake",
    "description": "Chilled coffee blended with ice cream.",
    "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=75",
    "price": 99,
    "dietType": "veg",
    "category": "Beverages",
    "rating": 4,
    "bestseller": false,
    "ingredients": [
      "Chilled",
      "coffee",
      "blended",
      "cream."
    ]
  },
  {
    "id": "f71",
    "restaurantId": "r15",
    "name": "Fish Curry Meal",
    "description": "Coastal-style fish curry served with steamed rice.",
    "image": "https://images.unsplash.com/photo-1585230405802-2255d5f9f7bf?auto=format&fit=crop&w=500&q=75",
    "price": 259,
    "dietType": "non-veg",
    "category": "Main Course",
    "rating": 3.9,
    "bestseller": false,
    "ingredients": [
      "Coastal-style",
      "curry",
      "served",
      "steamed",
      "rice."
    ]
  },
  {
    "id": "f72",
    "restaurantId": "r15",
    "name": "Prawn Fry",
    "description": "Pan-fried prawns tossed in coastal spice.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=500&q=75",
    "price": 289,
    "dietType": "non-veg",
    "category": "Starters",
    "rating": 4.7,
    "bestseller": false,
    "ingredients": [
      "Pan-fried",
      "prawns",
      "tossed",
      "coastal",
      "spice."
    ]
  },
  {
    "id": "f73",
    "restaurantId": "r15",
    "name": "Fish Fry",
    "description": "Crispy shallow-fried fish marinated in tangy masala.",
    "image": "https://images.unsplash.com/photo-1580959375944-abd7e991f971?auto=format&fit=crop&w=500&q=75",
    "price": 229,
    "dietType": "non-veg",
    "category": "Starters",
    "rating": 4.6,
    "bestseller": false,
    "ingredients": [
      "Crispy",
      "shallow-fried",
      "marinated",
      "tangy",
      "masala."
    ]
  },
  {
    "id": "f74",
    "restaurantId": "r15",
    "name": "Coconut Rice",
    "description": "Fragrant rice tempered with coconut and curry leaves.",
    "image": "https://images.unsplash.com/photo-1596560548464-f010549b84d8?auto=format&fit=crop&w=500&q=75",
    "price": 129,
    "dietType": "veg",
    "category": "Vegetarian",
    "rating": 4,
    "bestseller": true,
    "ingredients": [
      "Fragrant",
      "tempered",
      "coconut",
      "curry",
      "leaves."
    ]
  },
  {
    "id": "f75",
    "restaurantId": "r15",
    "name": "Buttermilk",
    "description": "Spiced yoghurt drink, cool and tangy.",
    "image": "https://images.unsplash.com/photo-1544145945-f90425340c8e?auto=format&fit=crop&w=500&q=75",
    "price": 39,
    "dietType": "veg",
    "category": "Beverages",
    "rating": 3.8,
    "bestseller": true,
    "ingredients": [
      "Spiced",
      "yoghurt",
      "drink,",
      "tangy."
    ]
  }
];
