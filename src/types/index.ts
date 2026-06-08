export type NavLink = {
  label: string;
  path: string;
};

export type Product = {
  name: string;
  description: string;
  badge?: string;
  emoji?: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  emoji: string;
  products: Product[];
};

export type Testimonial = {
  quote: string;
  source: string;
  platform: string;
};

export type Award = {
  title: string;
  years?: string;
  detail: string;
  stars?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
