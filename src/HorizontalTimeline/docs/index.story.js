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
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import HorizontalTimeline from '..';

const example = config =>
  baseExample({ components: { ...allComponents }, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: HorizontalTimeline,
  componentPath: '..',

  // TODO provide props
  componentProps: {
    steps: [],
  },

  // TODO provide props
  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${HorizontalTimeline.displayName}/`,
      component: (
        <div style={{ width: '200px' }}>
          <HorizontalTimeline
            steps={[
              {
                label: 'Step 1',
                type: 'active',
                icon: <HorizontalTimeline.CompletedIcon />,
              },
              {
                label: 'Step 2',
                type: 'active',
                icon: <HorizontalTimeline.ActiveIcon />,
              },
              {
                label: 'Step 3',
              },
            ]}
          />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            text:
              'HorizontalTimeline is a layout component that lists events in a horizontal line. Each event can have a specific status or icon. Use it to display domain connection status.',
          }),

          importExample(
            "import { HorizontalTimeline } from 'wix-style-react';",
          ),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Structure',
              description: `Component can have any number of items. Each item’s label and line color can appear neutral or highlighted as 'active'.`,
              source: examples.structure,
            },
            {
              title: 'Custom steps width',
              description:
                'Component divides items to equal columns. If needed each column’s width can be adjusted manually.',
              source: examples.width,
            },
            {
              title: 'Predefined Statuses',
              source: examples.predefined,
            },
          ].map(example),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
