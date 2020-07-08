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

import HorizontalTimeline from '..';
import { code as baseCode } from 'wix-storybook-utils/dist/src/Sections';

const code = config =>
  baseCode({
    components: allComponents,
    compact: false,
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: HorizontalTimeline,
  componentPath: '..',

  // TODO provide props -- maybe remove "playground" section?
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
              source: `
              <HorizontalTimeline
                steps={[
                  {label: 'Instructions completed'},
                  {label: 'Domain check'},
                  {label: 'Site is live worldwide'},
                ]}
              />
          `,
            },
            {
              title: 'Custom steps width',
              description:
                'Component divides items to equal columns. If needed each column’s width can be adjusted manually.',
              source: `
              <HorizontalTimeline
                steps={[
                  {label: 'Thirty percent width', width: '30%'},
                  {label: 'Width is auto'},
                  {label: 'Two hundred pixels width', width: '200px'},
                ]}
              />
          `,
            },
            {
              title: 'Predefined Statuses',
              source: `
              <HorizontalTimeline
                steps={[
                  {
                    label: 'Instructions completed',
                    type: 'active',
                    icon: <HorizontalTimeline.CompletedIcon />,
                  },
                  {
                    label: 'Domain check',
                    type: 'active',
                    icon: <HorizontalTimeline.ActiveIcon />,
                  },
                  { label: 'Domain connecting' },
                  {
                    label: 'Site is live worldwide',
                    icon: <HorizontalTimeline.ErrorIcon />,
                  },
                ]}
              />
          `,
            },
          ].map(code),
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
