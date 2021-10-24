import { PhotoOfTheWeekDto } from '@dark-rush-photography/shared/types';

export class StopForTexts extends PhotoOfTheWeekDto {
  group = 2;
  slug = 'stop-for-texts';
  title = 'Stop for Texts';
  description = `I should really stop to read my texts!`;
  keywords = ['Venice', 'Italy', 'Text', 'Cell Phone', 'Vespa', 'Modeling'];
  createdDate = new Date(2020, 3, 8).toISOString().substring(0, 10);
  publishedDate = new Date(2020, 3, 8).toISOString().substring(0, 10);
  location = { city: 'Venice', country: 'Italy' };
  starredImageIsCenteredIsCentered = false;

  private constructor() {
    super();
  }

  static of(): PhotoOfTheWeekDto {
    return new StopForTexts();
  }
}
