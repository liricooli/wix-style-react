import React from 'react';
import { storiesOf } from '@storybook/react';
import FacesRatingBar from '../FacesRatingBar';

const commonProps = {
  value: 2,
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
        props: {
          // the simulation (e.g. {size: "small"})
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${FacesRatingBar.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <FacesRatingBar {...commonProps} {...props} />);
  });
});
