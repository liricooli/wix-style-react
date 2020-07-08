import React from 'react';
import { storiesOf } from '@storybook/react';
import HorizontalTimeline from '../HorizontalTimeline';

const tests = [
  {
    describe: 'steps',
    its: [
      {
        it: 'defaults',
        props: {
          steps: [
            { label: 'Instructions completed' },
            { label: 'Domain check' },
            { label: 'Site is live worldwide' },
          ],
        },
      },
      {
        it: 'should have custom width for steps',
        props: {
          steps: [
            { label: 'Instructions completed', width: '25%' },
            { label: 'Domain check' },
            { label: 'Site is live worldwide', width: '25%' },
          ],
        },
      },
      {
        it: 'should have different icons and types for each step',
        props: {
          steps: [
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
            {
              label: 'Domain connecting',
              icon: <HorizontalTimeline.UpcomingIcon />,
            },
            {
              label: 'Site is live worldwide',
              icon: <HorizontalTimeline.ErrorIcon />,
            },
          ],
        },
      },
      {
        it: 'should show long text width ellipsis',
        props: {
          steps: [
            {
              label:
                'Long long-long-long-long-long-long-long-text in percentage container',
              width: '5%',
            },
            {
              label: 'Domain check',
            },
            {
              label:
                'Long long-long-long-long-long-long-long-text in static container',
              width: '50px',
            },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${HorizontalTimeline.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <HorizontalTimeline {...props} />);
  });
});
