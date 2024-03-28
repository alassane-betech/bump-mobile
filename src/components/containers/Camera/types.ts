export enum EMediaType {
  Image = "image",
  Video = "video",
}
export interface Media {
  mediaUri: string;
  type: EMediaType;
  uploaded?: boolean;
}
