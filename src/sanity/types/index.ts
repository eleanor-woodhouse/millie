export type Dimensions = {
  width: number;
  height: number;
};

export type Image = {
  id: string;
  url: string;
  dimensions: Dimensions;
};

export type HomepageImage = {
  image: Image;
  altText: string;
};

export type ContactDetails = {
  contactLines: string[];
};

export type AboutText = {
  text: string;
};

export type PDF = {
  url: string;
};

export type WrittenText = {
  _id: string;
  _createdAt: string;
  title: string;
  date: string;
  publishedBy: string;
  link: string;
  description: string;
  altText: string;
  pdf: PDF;
};

export type Category = {
  _id: string;
  _createdAt: string;
  categoryTitle: string;
  writtenTexts: WrittenText[];
  orderRank: string;
};
