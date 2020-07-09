import React from 'react';
import { storiesOf } from '@storybook/react';
import FacesRatingBar from '../FacesRatingBar';

const commonProps = {
  value: 2,
};

const tests = [
  /*
  {
    describe: 'interactive',
    its: [
      {
        it: 'example',
        props: {},
      },
    ],
  },
  {
    describe: 'read only',
    its: [
      {
        it: 'disapointed',
        props: {
          value: 1,
          readOnly: true,
        },
      },
      {
        it: 'frowning',
        props: {
          value: 2,
          readOnly: true,
        },
      },
      {
        it: 'neutral',
        props: {
          value: 3,
          readOnly: true,
        },
      },
      {
        it: 'smiling',
        props: {
          value: 4,
          readOnly: true,
        },
      },
      {
        it: 'grining',
        props: {
          value: 5,
          readOnly: true,
        },
      },
    ],
  },
  {
    describe: 'sizes',
    its: [
      {
        it: 'small- (read only mode)',
        props: {
          size: 'small',
          readOnly: true,
        },
      },
      {
        it: 'medium- (read only mode)',
        props: {
          size: 'medium',
          readOnly: true,
        },
      },
      {
        it: 'small- (interactive mode)',
        props: {
          size: 'small',
        },
      },
      {
        it: 'medium - (interactive mode)',
        props: {
          size: 'medium',
        },
      },
    ],
  },
*/
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${FacesRatingBar.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <FacesRatingBar {...commonProps} {...props} />);
  });
});
