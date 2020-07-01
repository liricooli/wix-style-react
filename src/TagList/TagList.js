import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './TagList.st.css';
import Tag from '../Tag';

/** TagList */
const TagList = ({ dataHook, tags, actionButton }) => {
  return (
    <div className={styles.root} data-hook={dataHook}>
      {tags}
      {actionButton && (
        <TagListAction
          dataHook="tag-list-action"
          onClick={actionButton.onClick}
        >
          {actionButton.label}
        </TagListAction>
      )}
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

TagList.displayName = 'TagList';

TagList.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.node),
  actionButton: PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string,
  }),
};

export default TagList;
