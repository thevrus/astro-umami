export interface Umami {
  track: {
    (payload?: object): void;
    (event_name: string, event_data?: object): void;
  };
  identify: (session_data?: object) => void;
}

declare global {
  interface Window {
    umami: Umami;
  }
}
