import React from 'react';
import PropTypes from 'prop-types';

import styles from './FacesRatingBar.st.css';
import { dataHooks } from './constants';

/** A rating component that will enable the user to rate on a 1-5 scale. */
class FacesRatingBar extends React.PureComponent {
  state = {};

  render() {
    const { dataHook } = this.props;

    return <div {...styles('root', {}, this.props)} data-hook={dataHook}></div>;
  }
}

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

  /** Represent the rate value tooltips’ texts. Only when the array contains 5 strings, this faces rating bar will display the tooltips labels. */
  tooltips: PropTypes.arrayOf(PropTypes.string),

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
  readOnly: false,
  onChange: () => {},
};

export default FacesRatingBar;
