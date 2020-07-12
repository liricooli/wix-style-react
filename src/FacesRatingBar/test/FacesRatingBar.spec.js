import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import FacesRatingBar from '../FacesRatingBar';
import { facesRatingBarPrivateDriverFactory } from './FacesRatingBar.private.uni.driver';

describe(FacesRatingBar.displayName, () => {
  const render = createRendererWithUniDriver(
    facesRatingBarPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render the faces rating bar', async () => {
    const { driver } = render(<FacesRatingBar value={3} />);

    expect(await driver.exists()).toBe(true);
  });

  it('expect onChange to be called after selecting a rating', async () => {
    const onChange = jest.fn();
    const { driver } = render(<FacesRatingBar value={0} onChange={onChange} />);

    expect(await driver.getSelectedRating()).toEqual(0);

    await driver.selectRating(4);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(4);
  });
});
