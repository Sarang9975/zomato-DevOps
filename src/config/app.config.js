// App Configuration File
export const APP_CONFIG = {
  // App Settings
  appName: 'Zomato Clone Enhanced',
  version: '2.0.0',
  environment: process.env.NODE_ENV || 'development',
  
  // API Configuration
  apiBaseUrl: process.env.REACT_APP_API_URL || 'https://api.zomato-clone.com',
  apiTimeout: 30000,
  
  // Feature Flags
  features: {
    orderTracking: true,
    realTimeUpdates: true,
    pushNotifications: false,
    darkMode: true,
    accessibility: true
  },
  
  // UI Configuration
  ui: {
    theme: 'light',
    language: 'en',
    currency: 'USD',
    dateFormat: 'MM/DD/YYYY'
  },
  
  // Security Settings
  security: {
    enableCSP: true,
    enableHSTS: true,
    enableXSSProtection: true,
    maxLoginAttempts: 5
  },
  
  // Performance Settings
  performance: {
    enableLazyLoading: true,
    enableServiceWorker: true,
    enableCaching: true,
    maxCacheAge: 86400000 // 24 hours
  }
};

// Export default config
export default APP_CONFIG; 