import { Product, CombinedProduct } from './models/models';
import { ProductGroup } from './models/productGroup';

const LABEL_NEW = 'Новинка';

export const PRODUCTS: Product[] = [
    new Product(
        1,
        "Простой продукт 1 NewProduct",
        "Описание простого продукта New Product номер 1. Продукт обладает вот такими вот качествами и создан специально для вот такого вот.",
        1500
    ).setLable(LABEL_NEW),
    new Product(
        2,
        "Простой продукт 2 Sample product",
        "Описание простого продукта Sample Product номер 2. Продукт обладает вот такими вот качествами и создан специально для вот такого вот.",
        2000
    ),
    new Product(
        3,
        "Простой продукт 3 Product with length name like this: 'WWwwwWWWWwwWwwWwwwwwwwWwwww'",
        "Описание простого продукта Product with length name номер 3. Продукт обладает вот такими вот качествами и создан специально для вот такого вот.",
        2000
    ).setLable(LABEL_NEW),
    new Product(
        4,
         "Простой продукт 4 Popular Product",
         "Описание простого продукта New Product номер 4. Продукт обладает вот такими вот качествами и создан специально для вот такого вот.",
         1750,
    )    
];

export const PRODUCT_GROUP: ProductGroup[] = [
        new ProductGroup(1, "Каллиграфия", "Перья, кисти, тушь и чернила", 250),
        new ProductGroup(2, "Маркеры", null, 250),
        new ProductGroup(2, "Акварель", "Краска, кисти, бумага", 250),
        new ProductGroup(2, "Дизайнерские товары", "Открытки, Скетчбуки, Футболки с принтами и многое другое", null),
];