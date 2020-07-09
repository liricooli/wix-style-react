import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './HorizontalTimeline.st.css';
import iconsStyles from './HorizontalTimelineIcons.st.css';
import StatusCompleteFilled from 'wix-ui-icons-common/StatusCompleteFilledSmall';
import StatusAlertFilled from 'wix-ui-icons-common/StatusAlertFilled';
import Box from '../Box';

class HorizontalTimeline extends React.PureComponent {
  render() {
    const { items, dataHook, className } = this.props;

    return (
      <div {...styles('root', {}, { className })} data-hook={dataHook}>
        {items.map(({ label, width, type, icon }, i) => {
          width = width || 'auto';
          type = type || 'inactive';
          icon = icon || <HorizontalTimeline.UpcomingIcon />;

          const isItemActive = type === 'active';
          const isFirstItem = i === 0;
          const isLastItem = items.length - 1 === i;
          const isNextItemActive =
            items[i + 1] && items[i + 1].type === 'active';

          return (
            <div className={styles.column} key={i} style={{ width: width }}>
              <div className={styles.item}>
                <div className={styles.topRow}>
                  <div
                    {...styles('line', {
                      type: isFirstItem
                        ? 'hidden'
                        : isItemActive
                        ? 'active'
                        : 'inactive',
                    })}
                  />

                  <div className={styles.iconWrapper}>{icon}</div>

                  <div
                    {...styles('line', {
                      type: isLastItem
                        ? 'hidden'
                        : isNextItemActive
                        ? 'active'
                        : 'inactive',
                    })}
                  />
                </div>

                <Box className={styles.label}>
                  <Text size="tiny" secondary={!isItemActive} ellipsis>
                    {label}
                  </Text>
                </Box>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

HorizontalTimeline.UpcomingIcon = () => {
  return <div className={iconsStyles.upcomingIcon} />;
};

HorizontalTimeline.ActiveIcon = () => {
  return <div className={iconsStyles.activeIcon} />;
};

HorizontalTimeline.DestructiveIcon = () => {
  return <StatusAlertFilled className={iconsStyles.errorIcon} />;
};

HorizontalTimeline.CompleteIcon = () => {
  return <StatusCompleteFilled className={iconsStyles.completeIcon} />;
};

HorizontalTimeline.displayName = 'HorizontalTimeline';

HorizontalTimeline.UpcomingIcon.displayName = 'HorizontalTimeline.UpcomingIcon';
HorizontalTimeline.ActiveIcon.displayName = 'HorizontalTimeline.ActiveIcon';
HorizontalTimeline.DestructiveIcon.displayName =
  'HorizontalTimeline.DestructiveIcon';
HorizontalTimeline.CompleteIcon.displayName = 'HorizontalTimeline.CompleteIcon';

HorizontalTimeline.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
  /** Timeline items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** item's type */
      type: PropTypes.oneOf(['active', 'inactive']),
      /** item's text */
      label: PropTypes.string.isRequired,
      /** item's icon */
      icon: PropTypes.node,
      /** custom width for item */
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
};

HorizontalTimeline.defaultProps = {};

export default HorizontalTimeline;
