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
});
