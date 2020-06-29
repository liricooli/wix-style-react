export const extractEllipsisProps = ({
  appendTo,
  disabled,
  ellipsis,
  enterDelay,
  exitDelay,
  fixed,
  flip,
  maxWidth,
  moveArrowTo,
  onHide,
  onShow,
  placement,
  showTooltip,
  textAlign,
  zIndex,
  ...componentProps
}) => {
  return {
    ellipsisProps: {
      appendTo,
      disabled,
      ellipsis,
      enterDelay,
      exitDelay,
      fixed,
      flip,
      maxWidth,
      moveArrowTo,
      onHide,
      onShow,
      placement,
      showTooltip,
      textAlign,
      zIndex,
    },
    componentProps,
  };
};
