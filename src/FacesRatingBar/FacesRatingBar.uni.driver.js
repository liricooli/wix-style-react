import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const facesRatingBarDriverFactory = (base, body) => {
  // const getFaces = async () => await base.$$(`[data-hook="${dataHooks.face}"]`)

  return {
    ...baseUniDriverFactory(base, body),

    /** Select the faces rating bar value */
    selectRating: async id => base.$(`[data-index="${id}"]`).click(),

    /** Return the selected rating (a number between 0 to 5) */
    // getSelectedRating: async () => await getFaces().find(element => element.attr('data-selected') === 'true'), // todo: change this
  };
};
