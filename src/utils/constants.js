// API Endpoints
export const API_BASE_URL = 'https://api.zomato-clone.com/v1';
export const RESTAURANTS_ENDPOINT = '/restaurants';
export const ORDERS_ENDPOINT = '/orders';
export const USERS_ENDPOINT = '/users';

// App Constants
export const APP_NAME = 'Zomato Clone';
export const APP_VERSION = '1.0.0';

// Pagination
export const ITEMS_PER_PAGE = 20;
export const MAX_PAGE_SIZE = 100;

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

// Payment Methods
export const PAYMENT_METHODS = {
  CASH: 'cash',
  CARD: 'card',
  UPI: 'upi',
  WALLET: 'wallet'
};

// Cuisine Types
export const CUISINE_TYPES = [
  'Indian',
  'Chinese',
  'Italian',
  'Mexican',
  'Japanese',
  'Thai',
  'American',
  'Mediterranean'
];

// Rating Constants
export const MIN_RATING = 1;
export const MAX_RATING = 5;
export const RATING_THRESHOLD = 4.0; 