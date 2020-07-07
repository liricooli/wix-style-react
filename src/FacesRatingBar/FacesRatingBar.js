import React from 'react';
import PropTypes from 'prop-types';

import styles from './FacesRatingBar.st.css';
import { dataHooks, facesRatingBarSizesInPx, faceIndexes } from './constants';

import FaceDisapointed from 'wix-ui-icons-common/dist/src/general/dist/components/FaceDisapointed';
import FaceFrowning from 'wix-ui-icons-common/dist/src/general/dist/components/FaceFrowning';
import FaceNeutral from 'wix-ui-icons-common/dist/src/general/dist/components/FaceNeutral';
import FaceSmiling from 'wix-ui-icons-common/dist/src/general/dist/components/FaceSmiling';
import FaceGrining from 'wix-ui-icons-common/dist/src/general/dist/components/FaceGrining';

import Box from '../Box/Box';

const faceIconsMap = {
  1: FaceDisapointed,
  2: FaceFrowning,
  3: FaceNeutral,
  4: FaceSmiling,
  5: FaceGrining,
};

/** A rating component that will enable the user to rate on a 1-5 scale. */
class FacesRatingBar extends React.PureComponent {
  state = {};

  render() {
    const { dataHook, size } = this.props;

    return (
      <Box {...styles('root', {}, this.props)} data-hook={dataHook}>
        <Faces size={size} />
      </Box>
    );
  }
}

const Faces = props => {
  return Object.values(faceIndexes).map(faceIndex => {
    const IconTagName = faceIconsMap[faceIndex];

    return (
      <Box
        {...styles('root', {}, this.props)}
        key={faceIndex}
        width={facesRatingBarSizesInPx[props.size]}
        height={facesRatingBarSizesInPx[props.size]}
        borderRadius={facesRatingBarSizesInPx[props.size]}
        backgroundColor="G40"
      >
        <IconTagName
          className={styles.faceIcon}
          color="G05"
          width={facesRatingBarSizesInPx[props.size]}
          height={facesRatingBarSizesInPx[props.size]}
        />
      </Box>
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
