import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import TagList from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: TagList,
  componentPath: '..',

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${TagList.displayName}/`,
      component: (
        <TagList>
          <TagList.Tag id="1">Tag 1</TagList.Tag>
          <TagList.Action>Clear All</TagList.Action>
        </TagList>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'Layout component to display list of tags',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'Showing 2 tags and action button',
            source:
              '<TagList><TagList.Tag id="1">Tag 1</TagList.Tag><TagList.Tag id="2">Tag 2</TagList.Tag><TagList.Action>Clear All</TagList.Action></TagList>',
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
      ].map(tab),
    ]),
  ],
};
