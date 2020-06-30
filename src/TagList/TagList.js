import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './TagList.st.css';
import Tag from '../Tag';

/** TagList */
const TagList = ({ dataHook, children }) => {
  return (
    <div className={styles.root} data-hook={dataHook}>
      {children}
    </div>
  );
};
const TagListItem = props => <Tag {...props} size="small" />;
TagListItem.propTypes = Tag.propTypes;

const TagListAction = ({ dataHook, onClick, children }) => (
  <Button skin="inverted" size="tiny" dataHook={dataHook} onClick={onClick}>
    {children}
  </Button>
);

TagListAction.propTypes = {
  dataHook: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

TagList.Tag = TagListItem;
TagList.Action = TagListAction;

TagList.displayName = 'TagList';

TagList.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  children: PropTypes.node,
};

export default TagList;
