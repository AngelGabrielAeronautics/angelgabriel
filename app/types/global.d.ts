// Add TypeScript definitions for Google Analytics
interface Window {
  gtag: (
    command: 'config' | 'event' | 'js' | 'set',
    targetId: string,
    options?: {
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
} 