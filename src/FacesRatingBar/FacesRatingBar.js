import React from 'react';
import PropTypes from 'prop-types';

import styles from './FacesRatingBar.st.css';
import {
  dataHooks,
  facesRatingBarSizesInPx,
  faceIndexes,
  faceIconTypeMap,
} from './constants';

import FaceDisapointed from 'wix-ui-icons-common/dist/src/general/dist/components/FaceDisapointed';
import FaceFrowning from 'wix-ui-icons-common/dist/src/general/dist/components/FaceFrowning';
import FaceNeutral from 'wix-ui-icons-common/dist/src/general/dist/components/FaceNeutral';
import FaceSmiling from 'wix-ui-icons-common/dist/src/general/dist/components/FaceSmiling';
import FaceGrining from 'wix-ui-icons-common/dist/src/general/dist/components/FaceGrining';

import Box from '../Box/Box';
import Tooltip from '../Tooltip';

const faceIconsMap = {
  1: FaceDisapointed,
  2: FaceFrowning,
  3: FaceNeutral,
  4: FaceSmiling,
  5: FaceGrining,
};

/** A rating component that will enable the user to rate on a 1-5 scale. */
class FacesRatingBar extends React.PureComponent {
  state = {
    faceHoveredIndex: 0,
  };

  componentDidMount() {
    const { readOnly, value } = this.props;

    if (readOnly && value === 0) {
      throw new Error(
        'In readOnly mode the value couldn’t be 0. Please enter a value between 1 to 5.',
      );
    }
  }

  _onFaceClick = index => {
    const { readOnly, onChange } = this.props;

    if (!readOnly) {
      onChange(index);
    }
  };

  _onFaceMouseEnter = index => {
    const { readOnly } = this.props;

    if (!readOnly) {
      this.setState({ faceHoveredIndex: index });
    }
  };

  _onFaceMouseLeave = () => {
    const { readOnly } = this.props;

    if (!readOnly) {
      this.setState({ faceHoveredIndex: 0 });
    }
  };

  _shouldShowDescriptionValues = () => {
    const { readOnly, descriptionValues } = this.props;
    let shouldShowDescriptionValues = false;

    if (descriptionValues) {
      const isValidDescriptionValues =
        Array.isArray(descriptionValues) && descriptionValues.length === 5;

      if (readOnly) {
        // Adding description values is not available in read only mode
        shouldShowDescriptionValues = false;
      } else {
        // Description values must be an array of strings at size 5
        shouldShowDescriptionValues = isValidDescriptionValues;
      }
    }

    return shouldShowDescriptionValues;
  };

  render() {
    const { dataHook, readOnly, size, value, descriptionValues } = this.props;
    const { faceHoveredIndex } = this.state;

    const showDescriptionValues = this._shouldShowDescriptionValues();

    return (
      <Box {...styles('root', {}, this.props)} data-hook={dataHook}>
        <Faces
          readOnly={readOnly}
          size={size}
          selectedIndex={value}
          hoveredIndex={faceHoveredIndex}
          showDescriptionValues={showDescriptionValues}
          descriptionValues={descriptionValues}
          onClick={this._onFaceClick}
          onMouseEnter={this._onFaceMouseEnter}
          onMouseLeave={this._onFaceMouseLeave}
        />
      </Box>
    );
  }
}

const Faces = props => {
  return Object.values(faceIndexes).map(faceIndex => {
    const IconTagName = faceIconsMap[faceIndex];
    const isSelected = props.selectedIndex === faceIndex;
    const isHovered = props.hoveredIndex === faceIndex;
    const type = props.readOnly ? 'readOnly' : 'interactive';
    const iconType = faceIconTypeMap[faceIndex];
    const tooltipContent = props.showDescriptionValues
      ? props.descriptionValues[faceIndex - 1]
      : '';

    return (
      <div
        {...styles(
          'faceWrapper',
          {
            type: type,
            size: props.size,
            hovered: isHovered,
            selected: isSelected,
            iconType: iconType,
          },
          props,
        )}
        key={faceIndex}
        onClick={() => props.onClick(faceIndex)}
        onMouseEnter={() => props.onMouseEnter(faceIndex)}
        onMouseLeave={props.onMouseLeave}
      >
        <Tooltip
          content={tooltipContent}
          disabled={!props.showDescriptionValues}
        >
          <IconTagName
            className={styles.faceIcon}
            width={facesRatingBarSizesInPx[props.size]}
            height={facesRatingBarSizesInPx[props.size]}
          />
        </Tooltip>
      </div>
    );
  });
};

FacesRatingBar.displayName = 'FacesRatingBar';

FacesRatingBar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Specifies the size of the faces rating bar. The default value for the read only mode is 'medium'. */
  size: PropTypes.oneOf(['small', 'medium']),

  /** In read only mode rating cannot be changed. */
  readOnly: PropTypes.bool,

  /** Represent the rate value descriptions’ texts. Only when the array contains 5 strings, this faces rating bar will display the descriptions labels. */
  descriptionValues: PropTypes.arrayOf(PropTypes.string),

  /** The faces rating bar’s selected rate. In the readOnly mode the value couldn’t be 0. */
  value: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,

  /** A Handler for rating changes
   * ##### Signature:
   * function(rating: number) => void
   * * `rating`: 1 | 2 | 3 | 4 | 5
   */
  onChange: PropTypes.func,
};

FacesRatingBar.defaultProps = {
  size: 'medium',
  readOnly: false,
  onChange: () => {},
};

export default FacesRatingBar;
