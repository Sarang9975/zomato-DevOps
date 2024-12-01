// Environment Configuration
const environment = {
  development: {
    apiUrl: 'http://localhost:3001/api',
    enableDebug: true,
    enableAnalytics: false,
    enablePushNotifications: false,
    enableOfflineMode: true,
    cacheDuration: 300000, // 5 minutes
    maxRetries: 3
  },
  staging: {
    apiUrl: 'https://staging-api.zomato-clone.com',
    enableDebug: true,
    enableAnalytics: true,
    enablePushNotifications: true,
    enableOfflineMode: true,
    cacheDuration: 900000, // 15 minutes
    maxRetries: 5
  },
  production: {
    apiUrl: 'https://api.zomato-clone.com',
    enableDebug: false,
    enableAnalytics: true,
    enablePushNotifications: true,
    enableOfflineMode: true,
    cacheDuration: 3600000, // 1 hour
    maxRetries: 3
  }
};

// Get current environment
const currentEnv = process.env.NODE_ENV || 'development';

// Export current environment config
export const envConfig = environment[currentEnv];

// Export all environments for testing
export const allEnvironments = environment;

// Environment variables
export const envVars = {
  API_URL: process.env.REACT_APP_API_URL || envConfig.apiUrl,
  API_KEY: process.env.REACT_APP_API_KEY,
  GOOGLE_MAPS_API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  STRIPE_PUBLISHABLE_KEY: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN,
  ENABLE_DEBUG: process.env.REACT_APP_ENABLE_DEBUG !== 'false' && envConfig.enableDebug,
  ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS !== 'false' && envConfig.enableAnalytics,
  ENABLE_PUSH_NOTIFICATIONS: process.env.REACT_APP_ENABLE_PUSH_NOTIFICATIONS !== 'false' && envConfig.enablePushNotifications,
  ENABLE_OFFLINE_MODE: process.env.REACT_APP_ENABLE_OFFLINE_MODE !== 'false' && envConfig.enableOfflineMode
};

export default envConfig; 