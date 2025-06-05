export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  discount: number;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  features: string[];
  specifications: Record<string, string>;
  stock: number;
  sku: string;
}