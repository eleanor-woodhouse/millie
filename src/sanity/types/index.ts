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
};

export type WrittenText = {
  _id: string;
  _createdAt: string;
  title: string;
  date: string;
  publishedBy: string;
  link: string;
  description: string;
};

export type Category = {
  _id: string;
  _createdAt: string;
  textTitle: string;
  writtenTexts: WrittenText[];
};
