import { SECRET_SANITY_STUDIO_URL } from '$env/static/private';

export const load = () => {
    if (!import.meta.env.PROD && SECRET_SANITY_STUDIO_URL) {
      return { 
        studio: {
          url: SECRET_SANITY_STUDIO_URL
        }
      };
    } else {
      return { studio: null };
    }
  };