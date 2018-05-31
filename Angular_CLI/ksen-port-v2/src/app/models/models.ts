import { CombinedProduct, Product } from './models';

export * from './product';
export * from './combinedProduct';
export * from './basketProduct';

export type IProduct = Product | CombinedProduct;