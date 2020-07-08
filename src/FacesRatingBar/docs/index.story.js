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
import * as examples from './examples';

import FacesRatingBar from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: FacesRatingBar,
  componentPath: '..',

  componentProps: {
    readOnly: false,
    value: 3,
    onChange: () => {},
  },

  exampleProps: {
    descriptionValues: [
      {
        label: 'With description values',
        value: [
          'Strong Negative',
          'Negative',
          'Neutral',
          'Positive',
          'Strong Positive',
        ],
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${FacesRatingBar.displayName}/`,
      component: <FacesRatingBar value={3} />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This component let the users the ability to share their opinion about any requested subject on a 1-5 scale.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple examples',
            source: examples.basicExample,
          }),

          example({
            title: 'readOnly',
            text:
              'Faces rating bar has 2 modes: readOnly and interactive. This is an example for the readOnly mode.',
            source: examples.readOnlyExample,
          }),

          example({
            title: 'Sizes',
            text: 'There are 2 sizes: small and medium (default)',
            source: examples.sizesExample,
          }),

          example({
            title: 'With description values',
            text:
              "Faces rating bar can show description values which are tooltips that represent the rate's values. Supported only in the interactive mode.",
            source: examples.descriptionValuesExample,
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
