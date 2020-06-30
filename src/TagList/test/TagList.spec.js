import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import TagList from '../TagList';
import { tagListPrivateDriverFactory } from './TagList.private.uni.driver';

describe(TagList.displayName, () => {
  const render = createRendererWithUniDriver(tagListPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<TagList />);

    expect(await driver.exists()).toBe(true);
  });
});
