import React, { useEffect, useState } from 'react';
import { forceRefresh, createNetworkStatusHandler } from '../utils/serviceWorkerManager';

const NetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Create network status handler
    const cleanup = createNetworkStatusHandler();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      cleanup();
    };
  }, []);

  if (!isOffline) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <p className="font-medium">You are offline</p>
      </div>
      <button
        onClick={forceRefresh}
        className="mt-2 bg-white text-red-500 px-3 py-1 text-sm font-medium rounded hover:bg-gray-100"
      >
        Refresh App
      </button>
    </div>
  );
};

export default NetworkStatus;
