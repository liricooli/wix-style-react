import * as React from 'react';

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

declare const HorizontalTimeline: React.FC<HorizontalTimelineProps>

export default HorizontalTimeline;
