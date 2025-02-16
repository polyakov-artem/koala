export type TProduct = {
  _id: string;
  price: number;
  category: string;
  detailsId: string;
  sizeId: string;
  appearanceId: string;
};

export type TAppearance = {
  _id: string;
  sizeId: string;
  detailsId: string;
  category: string;
  name: string;
  hex: string;
  mediaURL: Array<string>;
};

export type TSize = {
  _id: string;
  detailsId: string;
  category: string;
  name: string;
  height: number;
  width: number;
  length: number;
  weight: number;
  mediaURL: string;
};

export type TDetails = {
  _id: string;
  name: string;
  category: string;
  desc: string;
  fullDesc: string;
  materials: TMaterial[];
  advantages: TAdvantage[];
  reasons: TReason[];
  faq: TFaq;
  rating: number;
  reviews: number;
  features: string[];
  firmness: string[];
  layers: string[];
  awardsURL: string[];
  appearanceURL: string;
  sizeVariants: string[];
  appearanceVariants: string[];
};

export type TReview = {
  category: string;
  stars: string;
  title: string;
  text: string;
  name: string;
  imgURL: string;
  productId: string;
};

export type TAdvantage = { title: string; text: string; mediaURL: string };
export type TReason = { title: string; text: string; mediaURL: string };
export type TFaq = { title: string; text: string }[];
export type TMaterial = { title: string; text: string };
