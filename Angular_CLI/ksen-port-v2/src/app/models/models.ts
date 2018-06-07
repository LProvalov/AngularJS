import { CombinedProduct, Product } from './models';

export * from './product';
export * from './combinedProduct';
export * from './basketProduct';
export * from './productGroup';
export * from './carouselModel';

export type IProduct = Product | CombinedProduct;