export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Type definitions for Vapi SDK and Voiceflow attached to window
declare global {
  interface Window {
    vapiSDK: {
      run: (config: {
        apiKey: string;
        assistant: string;
        config?: any;
      }) => any;
    };
    vapiInstance: any;
    voiceflow: {
      chat: {
        load: (config: any) => void;
      };
    };
  }
}