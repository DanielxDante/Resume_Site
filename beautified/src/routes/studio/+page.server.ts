import { env } from '$env/dynamic/private';

export const load = () => {
    if (!import.meta.env.PROD && env.SECRET_SANITY_STUDIO_URL) {
      return { 
        studio: {
          url: env.SECRET_SANITY_STUDIO_URL
        }
      };
    } else {
      return { studio: null };
    }
  };