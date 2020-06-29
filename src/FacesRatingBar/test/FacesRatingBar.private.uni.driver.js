import { facesRatingBarDriverFactory as publicDriverFactory } from '../FacesRatingBar.uni.driver';

export const facesRatingBarPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
