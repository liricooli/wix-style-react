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

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: HorizontalTimeline,
  componentPath: '..',

  // TODO provide props
  componentProps: {},

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
            title: 'TODO-hr',
            text:
              ' TODO-hr This line here should briefly describe component in just a sentence or two. It should be short' +
              ' and easy to read.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Default view',
            source: `
              <HorizontalTimeline
                steps={[
                  {label: 'Instructions completed'},
                  {label: 'Domain check'},
                  {label: 'Site is live worldwide'},
                ]}
              />
          `,
          }),

          example({
            title: 'Custom steps width',
            source: `
              <HorizontalTimeline
                steps={[
                  {label: 'Instructions completed', width: '25%'},
                  {label: 'Domain check'},
                  {label: 'Site is live worldwide', width: '25%'},
                ]}
              />
          `,
          }),

          example({
            title: 'Possible steps combinations',
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
          }),
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
