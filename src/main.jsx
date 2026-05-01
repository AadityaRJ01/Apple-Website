import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import * as Sentry from "@sentry/react";

// Initialize Sentry
Sentry.init({
  dsn: "https://d674932a77e6d9b9ced1190d70fd4691@o4506876178464768.ingest.us.sentry.io/4506876181151744",

  integrations: [
    // Performance monitoring
    Sentry.browserTracingIntegration(),

    // React Router v6 tracing (optional but good)
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),

    // Session replay
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],

  // Performance monitoring
  tracesSampleRate: 1.0,

  // Replay settings
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// React App Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);