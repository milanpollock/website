import { WatermarkedType } from '../enums/watermarked-type.enum';

export interface EntityCreate {
  readonly watermarkedType: WatermarkedType;
  readonly group: string;
  readonly slug: string;
  readonly isPublic: boolean;
}
