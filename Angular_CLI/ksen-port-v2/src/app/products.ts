import { Product, CombinedProduct } from './models/models';

export const PRODUCTS: (Product | CombinedProduct)[] = [
    new Product(
        1,
        "Простой продукт 1 NewProduct",
        "Описание простого продукта New Product номер 1. Продукт обладает вот такими вот качествами и создан специально для вот такого вот.",
        1500
    ),
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
    ),
    new Product(
        4,
         "Простой продукт 4 Popular Product",
         "Описание простого продукта New Product номер 4. Продукт обладает вот такими вот качествами и создан специально для вот такого вот.",
         1750,
    ),
    new CombinedProduct(
        11,
        "Простой продукт 5 Combined Product",
        "Описание простого продукта Combined Product номер 4. Продукт обладает вот такими вот качествами и создан специально для вот такого вот.",
        4250,
        [
            "Кисточка беличья SuperBrush",
            "Бумага акварельня watercolor papper",
            "Акварель 'Ленинград' 12 цветов"
        ],
        [
            {
                id: 3,
                title: "Простой продукт 3 Product with length name like this: 'WWwwwWWWWwwWwwWwwwwwwwWwwww'",
                description: "Описание простого продукта Product with length name номер 3. Продукт обладает вот такими вот качествами и создан специально для вот такого вот.",
                price: 2000
            },
            {
                id: 4,
                title: "Простой продукт 4 Popular Product",
                description: "Описание простого продукта New Product номер 4. Продукт обладает вот такими вот качествами и создан специально для вот такого вот.",
                price: 1750
            }
        ]
    )
]