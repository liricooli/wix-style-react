import { horizontalTimelineDriverFactory as publicDriverFactory } from '../HorizontalTimeline.uni.driver';

export const horizontalTimelinePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
