import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import HorizontalTimeline from '../HorizontalTimeline';
import { horizontalTimelinePrivateDriverFactory } from './HorizontalTimeline.private.uni.driver';

describe(HorizontalTimeline.displayName, () => {
  const render = createRendererWithUniDriver(
    horizontalTimelinePrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  // TODO-hr write test
  it('should render', async () => {
    const { driver } = render(<HorizontalTimeline />);

    expect(await driver.exists()).toBe(true);
  });
});
