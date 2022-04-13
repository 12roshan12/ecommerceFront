export const fake =  {
    "products": [
        { "id":1,"name": "Black Man Jacket","description":"black man wear jacket","MainImageUrl":"assets/img/products/t1.jpg","price":"1000","Quantity":"5","category":1,"subCategory":1,"type":1,"attributes":1},
        { "id":2,"name": "White Man Jacket","description":"black man wear jacket","MainImageUrl":"assets/img/products/t2.jpg","price":"1000","Quantity":"4","category":1,"subCategory":1,"type":1,"attributes":1},
        { "id":3,"name": "Red Man Jacket","description":"black man wear jacket","MainImageUrl":"assets/img/products/t1.jpg","price":"1000","Quantity":"5","category":1,"subCategory":1,"type":1,"attributes":1}
    ],
    
    

    "details": {
        "category": [
            {
                "id": 1,
                "value": "Mens Fashion"
            },
            {
                "id": 2,
                "value": "Womens Fashion"
            },
            {
                "id": 3,
                "value": "Child Fashion"
            },
            {
                "id": 4,
                "value": "Electronics and Appliances"
            }
        ],
        "subCategory": [
            {
                "id": 1,
                "categoryId": 1,
                "value": "Clothing"
            },
            {
                "id": 2,
                "categoryId": 1,
                "value": "Footwear"
            },
            {
                "id": 3,
                "categoryId": 1,
                "value": "Accessories"
            },
            {
                "id": 4,
                "categoryId": 1,
                "value": "Grooming"
            },
            {
                "id": 5,
                "categoryId": 2,
                "value": "Sari"
            },
            {
                "id": 6,
                "categoryId": 2,
                "value": "Swim Suit"
            }
        ],
        "type": [
            {
                "id": 1,
                "subCategoryId": 1,
                "value": "Jacket"
            },
            {
                "id": 2,
                "subCategoryId": 1,
                "value": "Hoodies"
            },
            {
                "id": 3,
                "subCategoryId": 1,
                "value": "SweatShirt"
            },
            {
                "id": 4,
                "subCategoryId": 1,
                "value": "Sweaters"
            },
            {
                "id": 5,
                "subCategoryId": 1,
                "value": "Trouser"
            }
        ],
        "attributes": [
            {
                "id": 1,
                "type-id": 1,
                "size": [
                    "XL",
                    "XXL"
                ],
                "subImageUrl":"",
                "color":["red","blue","yellow"]
                
            }
        ]
    }
}