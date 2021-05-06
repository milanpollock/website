import { PhotoOfTheWeek, Month } from '@dark-rush-photography/shared-types';

export class ZigZags implements PhotoOfTheWeek {
  slug = 'zig-zags';
  group = 1;
  title = 'Zig Zags';
  description = `Which line takes me where? I like the lines and the zig zags in this photo!`;
  keywords = new Set<string>([
    'Stone Mountain Park',
    'Georgia',
    'Stairs',
    'Pattern',
    'Zig-zags',
    'Pathway',
    'Shadows',
  ]);
  datePublished = { month: Month.September, day: 21, year: 2019 };
  location = {
    place: 'Stone Mountain Park',
    city: 'Georgia',
    country: 'United States',
  };
  useTitleImage = false;
  text = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static of(): PhotoOfTheWeek {
    return new ZigZags();
  }
}
