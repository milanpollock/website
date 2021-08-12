import { NotFoundException } from '@nestjs/common';

import { ImageDimensionType } from '@dark-rush-photography/shared/types';
import {
  ImageResolution,
  LongestEdgeImageResolution,
  StandardImageResolution,
  TileImageResolution,
} from '@dark-rush-photography/api/types';

export const GET_IMAGE_VIDEO_RESOLUTION = (
  imageDimensionType: ImageDimensionType
): ImageResolution => {
  const imageVideoResolution = IMAGE_VIDEO_RESOLUTIONS.find(
    (imageResolution) => imageResolution.type === imageDimensionType
  );
  if (!imageVideoResolution)
    throw new NotFoundException(
      `Image video resolution is not found for type ${imageDimensionType}`
    );
  return imageVideoResolution;
};

export const IMAGE_VIDEO_RESOLUTIONS: (
  | StandardImageResolution
  | LongestEdgeImageResolution
  | TileImageResolution
)[] = [
  {
    type: ImageDimensionType.Tile,
    minPixels: { width: 260, height: 186 },
    longestEdge: 260,
  },
  {
    type: ImageDimensionType.Thumbnail,
    longestEdge: 16,
  },
  {
    type: ImageDimensionType.Small,
    longestEdge: 512,
  },
  {
    type: ImageDimensionType.Medium,
    longestEdge: 1024,
  },
  {
    type: ImageDimensionType.Large,
    longestEdge: 2048,
  },
  {
    type: ImageDimensionType.Facebook,
    pixels: { width: 1200, height: 630 },
    exactFit: false,
  },
  {
    type: ImageDimensionType.Instagram,
    pixels: { width: 1080, height: 1080 },
    exactFit: true,
  },
  {
    type: ImageDimensionType.LinkedIn,
    pixels: { width: 1200, height: 627 },
    exactFit: true,
  },
  {
    type: ImageDimensionType.GoogleBusiness,
    pixels: { width: 1080, height: 608 },
    exactFit: true,
  },
];
