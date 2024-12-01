import {
  formatCurrency,
  parseDeliveryTime,
  generateId,
  debounce,
  isValidEmail,
  sanitizeInput,
  getDeviceType
} from '../utils/helpers';

// Mock window.innerWidth for device type testing
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1920,
});

describe('Helper Functions', () => {
  describe('formatCurrency', () => {
    test('should format USD currency correctly', () => {
      expect(formatCurrency(1234.56, 'USD', 'en-US')).toBe('$1,234.56');
    });

    test('should format EUR currency correctly', () => {
      expect(formatCurrency(1234.56, 'EUR', 'de-DE')).toBe('1.234,56 €');
    });
  });

  describe('parseDeliveryTime', () => {
    test('should parse delivery time range correctly', () => {
      expect(parseDeliveryTime('25-35 min')).toBe(30);
      expect(parseDeliveryTime('10-20 min')).toBe(15);
    });

    test('should return default value for invalid input', () => {
      expect(parseDeliveryTime('invalid')).toBe(30);
    });
  });

  describe('generateId', () => {
    test('should generate unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
      expect(typeof id1).toBe('string');
    });
  });

  describe('debounce', () => {
    test('should debounce function calls', (done) => {
      let callCount = 0;
      const debouncedFn = debounce(() => {
        callCount++;
      }, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      setTimeout(() => {
        expect(callCount).toBe(1);
        done();
      }, 150);
    });
  });

  describe('isValidEmail', () => {
    test('should validate correct email formats', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
    });

    test('should reject invalid email formats', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@domain.com')).toBe(false);
    });
  });

  describe('sanitizeInput', () => {
    test('should sanitize HTML input', () => {
      expect(sanitizeInput('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
      expect(sanitizeInput('&<>"\'')).toBe('&amp;&lt;&gt;&quot;&#x27;');
    });
  });

  describe('getDeviceType', () => {
    test('should return desktop for large screens', () => {
      window.innerWidth = 1920;
      expect(getDeviceType()).toBe('desktop');
    });

    test('should return tablet for medium screens', () => {
      window.innerWidth = 1024;
      expect(getDeviceType()).toBe('tablet');
    });

    test('should return mobile for small screens', () => {
      window.innerWidth = 768;
      expect(getDeviceType()).toBe('mobile');
    });
  });
}); 