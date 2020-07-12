import { facesRatingBarDriverFactory as publicDriverFactory } from '../FacesRatingBar.uni.driver';
import { tooltipDriverFactory } from '../../Tooltip/Tooltip.uni.driver';

export const facesRatingBarPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    getCurrentTooltipDriver: index => {
      const currentTooltipSelector = `[data-tooltip-index="${index}"]`;
      const element = base.$(currentTooltipSelector);
      return tooltipDriverFactory(element, body);
    },
  };
};
