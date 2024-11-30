export const load = () => {
    if (import.meta.env.PROD) {
      return { studio: null };
    }
  
    return { 
      studio: {
        url: 'http://localhost:3333' // Default Sanity Studio port
      }
    };
  };