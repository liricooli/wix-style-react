import * as React from 'react';
import {PopoverMenuDividerProps, PopoverMenuItemProps} from '../PopoverMenu';

interface HorizontalTimelineStep {
  type?: 'active' | 'inactive';
  label: string;
  icon?: React.ReactNode;
  width?: string;
}

export interface HorizontalTimelineProps {
  dataHook?: string;
  className?: string;
  steps: HorizontalTimelineStep[];
}

export default class HorizontalTimeline extends React.PureComponent<HorizontalTimelineProps> {
  static UpcomingIcon: React.FC;
  static ActiveIcon: React.FC;
  static ErrorIcon: React.FC;
  static CompletedIcon: React.FC;
}
