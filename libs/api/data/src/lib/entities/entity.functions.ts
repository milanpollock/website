import {
  Entity,
  EntityCreate,
  EntityType,
} from '@dark-rush-photography/shared/types';
import {
  EntityAdminDto,
  EntityMinimalDto,
} from '@dark-rush-photography/api/types';
import { DocumentModel } from '../schema/document.schema';
import { loadComment } from '../content/comment.functions';
import { loadEmotion } from '../content/emotion.functions';
import { loadImage } from '../content/image.functions';
import { loadImageDimension } from '../content/image-dimension.functions';
import { loadVideo } from '../content/video.functions';

export const loadNewEntity = (
  entityType: EntityType,
  entityCreate: EntityCreate,
  googleDriveFolderId?: string
): Entity => ({
  type: entityType,
  googleDriveFolderId,
  watermarkedType: entityCreate.watermarkedType,
  group: entityCreate.group,
  slug: entityCreate.slug,
  order: 0,
  title: '',
  seoDescription: '',
  seoKeywords: [],
  location: {
    country: 'United States',
  },
  photoAlbumImageIsCentered: false,
  text: [],
  images: [],
  imageDimensions: [],
  videos: [],
  comments: [],
  emotions: [],
  isPublic: entityCreate.isPublic,
  isPublishing: false,
  isPublished: false,
});

export const loadEntity = (documentModel: DocumentModel): EntityAdminDto => ({
  type: documentModel.type,
  id: documentModel._id,
  googleDriveFolderId: documentModel.googleDriveFolderId,
  watermarkedType: documentModel.watermarkedType,
  group: documentModel.group,
  slug: documentModel.slug,
  order: documentModel.order,
  title: documentModel.title,
  seoDescription: documentModel.seoDescription,
  seoKeywords: documentModel.seoKeywords,
  dateCreated: documentModel.dateCreated,
  datePublished: documentModel.datePublished,
  location: documentModel.location,
  photoAlbumImageIsCentered: documentModel.photoAlbumImageIsCentered,
  text: documentModel.text,
  images: documentModel.images.map(loadImage),
  imageDimensions: documentModel.imageDimensions.map(loadImageDimension),
  videos: documentModel.videos.map(loadVideo),
  comments: documentModel.comments.map(loadComment),
  emotions: documentModel.emotions.map(loadEmotion),
  isPublic: documentModel.isPublic,
  isPublishing: documentModel.isPublishing,
  isPublished: documentModel.isPublished,
});

export const loadEntityMinimal = (
  documentModel: DocumentModel
): EntityMinimalDto => ({
  type: documentModel.type,
  id: documentModel._id,
  watermarkedType: documentModel.watermarkedType,
  group: documentModel.group,
  slug: documentModel.slug,
});

export const loadDocumentModelsArray = (
  documentModels: DocumentModel | DocumentModel[]
): DocumentModel[] => {
  return Array.isArray(documentModels) ? documentModels : [documentModels];
};
