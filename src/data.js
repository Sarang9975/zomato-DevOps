const questions = [
  {
    id: 1,
    title: "Popular cuisines near me",
    infos: [
      "Bakery food near me • ",
      "Beverages food near me • ",
      "Bihari food near me • ",
      "Biryani food near me • ",
      "Burger food near me • ",
      "Chinese food near me • ",
      "Desserts food near me • ",
      "Ice Cream food near me • ",
      "Kebab food near me • ",
      "Momos food near me • ",
      "Mughlai food near me • ",
      "North Indian food near me • ",
      "Pizza food near me • ",
      "Rolls food near me • ",
      "Sandwich food near me • ",
      "Shake food near me • ",
      "Sichuan food near me • ",
      "South Indian food near me • ",
      "Street food near me • ",
    ],
  },
  {
    id: 2,
    title: "Popular restaurant types near me",
    infos: [
      "Bars near me • ",
      "Bakeries near me • ",
      "Beverage Shops near me • ",
      "Bhojanalya near me • ",
      "Cafés near me • ",
      "Casual Dining near me • ",
      "Confectioneries near me • ",
      "Dessert Parlors near me • ",
      "Dhabas near me • ",
      "Fine Dining near me • ",
      "Food Courts near me • ",
      "Food Trucks near me • ",
      "Kiosks near me • ",
      "Lounges near me • ",
      "Quick Bites near me • ",
      "Sweet Shops near me • ",
    ],
  },
  {
    id: 3,
    title: "Top Restaurant Chains",
    infos: [
      "KFC • ",
      "Paradise Biryani • ",
      "Pizza Hut • ",
      "Sagar RatnaWOW! • ",
      "Momo • ",
    ],
  },
];

// New Restaurant Data
export const newRestaurants = [
  {
    id: 101,
    name: "Spice Garden",
    cuisine: "Indian Fusion",
    rating: 4.8,
    deliveryTime: "25-35 min",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    specialties: ["Butter Chicken", "Biryani", "Naan"]
  },
  {
    id: 102,
    name: "Ocean Delight",
    cuisine: "Seafood",
    rating: 4.6,
    deliveryTime: "30-45 min",
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    specialties: ["Grilled Salmon", "Lobster", "Crab Cakes"]
  },
  {
    id: 103,
    name: "Veggie Paradise",
    cuisine: "Vegetarian",
    rating: 4.7,
    deliveryTime: "20-30 min",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    specialties: ["Quinoa Bowl", "Veggie Burger", "Smoothie"]
  }
];

// Enhanced Categories
export const enhancedCategories = [
  "Trending Now",
  "Best Rated",
  "Fast Delivery",
  "Budget Friendly",
  "Premium Dining",
  "Local Favorites"
];

export default questions;
