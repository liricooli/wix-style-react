import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const facesRatingBarDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Select the faces rating bar value */
    selectRating: async value => {},

    /** Return the selected rating (a number between 0 to 5) */
    getSelectedRating: async () => {},
  };
};
