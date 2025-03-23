/**
 * Service worker management utility for handling PWA caching issues
 */

// Function to unregister all service workers - useful when having caching issues
export const unregisterServiceWorkers = async () => {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.unregister();
      console.log('Service worker unregistered');
    }
    return true;
  }
  return false;
};

// Function to clear all caches
export const clearAllCaches = async () => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map(name => caches.delete(name)));
    console.log('All caches cleared');
    return true;
  }
  return false;
};

// Function to force a complete refresh by clearing caches and service workers
export const forceRefresh = async () => {
  await clearAllCaches();
  const unregistered = await unregisterServiceWorkers();
  
  // Hard reload the page
  window.location.reload(true);
  return unregistered;
};

// Create a component to help detect offline/online status
export const createNetworkStatusHandler = () => {
  const handleOffline = () => {
    console.log('The network connection has been lost.');
    // You might want to show a notification to the user here
    document.body.classList.add('offline-mode');
  };

  const handleOnline = () => {
    console.log('The network connection has been restored.');
    document.body.classList.remove('offline-mode');
    
    // You might want to refresh content here
    // But don't reload the page automatically as it might disrupt user
  };

  // Setup event listeners
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Initial check
  if (!navigator.onLine) {
    handleOffline();
  }

  // Return cleanup function
  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
};
