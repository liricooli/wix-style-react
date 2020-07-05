import React from 'react';
import { storiesOf } from '@storybook/react';
import TagList from '../TagList';

const commonProps = {
  // use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
        props: {
          dataHook: 'datahook',
          tags: [<TagList.Tag id="0">Tag</TagList.Tag>],
        },
      },
    ],
  },
  {
    describe: 'actionButton',
    its: [
      {
        it: 'none',
        props: {
          tags: [<TagList.Tag id="0">Tag</TagList.Tag>],
          actionButton: null,
        },
      },
      {
        it: 'with label',
        props: {
          tags: [<TagList.Tag id="0">Tag</TagList.Tag>],
          actionButton: {
            label: 'action button',
          },
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${TagList.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <TagList {...commonProps} {...props} />);
  });
});
