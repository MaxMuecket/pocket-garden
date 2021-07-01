export type Plant = {
  imagePath: string;
  name: string;
  firstMonth: number;
  lastMonth: number;
  place: number;
  note: string;
  active: boolean;
};

export type CloudinaryImage = {
  access_mode: string;
  asset_id: string;
  bytes: number;
  created_at: string;
  etag: string;
  format: string;
  height: number;
  original_filename: string;
  placeholder: false;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: [];
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
};
