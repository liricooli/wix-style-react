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
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import HorizontalTimeline from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

const ComponentExample = () => {
  return (
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
  );
};

const componentExampleSource = `
  <HorizontalTimeline
      steps={[
        { label: 'Instructions completed' },
        { label: 'Domain check' },
        { label: 'Domain connecting' },
        { label: 'Site is live worldwide' },
      ]}
    />
`;

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: HorizontalTimeline,
  componentPath: '..',

  // TODO-hr provide props
  componentProps: {},

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${HorizontalTimeline.displayName}/`,
      component: <ComponentExample />,
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
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: componentExampleSource,
          }),

          code({
            title: 'Full Interactive Preview',
            description: 'A non compact version of same code example as above',
            source: componentExampleSource,
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
