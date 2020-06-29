import { TooltipCommonProps } from '../../common';
import * as React from 'react';

export interface EllipsisProps extends TooltipCommonProps {
  className?: string;
  ellipsis?: boolean;
  showTooltip?: boolean;
  render<T>(
    ref: React.Ref<T>,
    ellipsisClasses: (className: string) => string,
  ): React.ReactElement;
}

export default class Ellipsis extends React.PureComponent<EllipsisProps> {}

export function extractEllipsisProps(
  ...props: any[]
): { ellipsisProps: any; componentProps: EllipsisProps };
