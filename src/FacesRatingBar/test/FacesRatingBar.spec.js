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

  it('should render', async () => {
    const { driver } = render(<FacesRatingBar />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<FacesRatingBar />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<FacesRatingBar buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
