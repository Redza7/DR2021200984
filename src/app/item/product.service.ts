import { Injectable } from "@angular/core";

export interface Product {
    id: number,
    name:string,
    image:string,
    category:'T-shirt'|'Hoodie'|'Jacket'|'Sweatshirt',
    size:Array<'S'|'M'|'L'|'XL'|'XXL'>,
    brand:string,
    price:number,
    reviews:Array<number>,
    recommended?: boolean,
    discount?: number,
}

@Injectable()
export class ProductService {
    static ProductList: Array<Product> =  [
        {
          id: 1,
          name: 'Hugo Boss Hoodie',
          image: 'assets/images/products/bk1.jpg',
          category: 'Hoodie',
          size: ['L', 'XL'],
          brand: 'Hugo Boss',
          price: 112,
          reviews: [5, 5, 3, 4, 3],
          recommended: true,
          discount: 15,
        },
        {
          id: 2,
          name: 'Hugo Boss Hoodie',
          image: 'assets/images/products/bk2.jpg',
          category: 'Hoodie',
          size: ['S', 'M'],
          brand: 'Hugo Boss',
          price: 110,
          reviews: [4, 2, 5, 3, 5],
          recommended: true,
        },
        {
          id: 3,
          name: 'Scotch&Soda Hoodie',
          image: 'assets/images/products/bk3.jpg',
          category: 'Hoodie',
          size: ['M', 'L','XL','XXL'],
          brand: 'Scotch&Soda',
          price: 99,
          reviews: [5, 2, 3, 5, 5],
          recommended: true,
        },
        {
          id: 4,
          name: 'Scotch&Soda dzemper',
          image: 'assets/images/products/dz2.jpg',
          category: 'Sweatshirt',
          size: ['XL', 'XXL'],
          brand: 'Scotch&Soda',
          price: 150,
          reviews: [4, 4, 4, 4, 5],
          recommended: true,
        },
        {
          id: 5,
          name: 'Guess Hoodie',
          image: 'assets/images/products/bk4.jpg',
          category: 'Hoodie',
          size: ['S', 'L'],
          brand: 'Guess',
          price: 90,
          reviews: [5, 5, 4, 5, 4],
          discount: 15,
          recommended: true,
        },
        {
          id: 6,
          name: 'Calvin Klein Hoodie',
          image: 'assets/images/products/bk5.jpg',
          category: 'Hoodie',
          size: ['XL', 'XXL'],
          brand: 'Calvin Klein',
          price: 95,
          reviews: [5, 4, 5, 5, 5],
        },
        {
          id: 7,
          name: 'Calvin Klein',
          image: 'assets/images/products/bk6.jpg',
          category: 'Hoodie',
          size: ['M', 'XXL'],
          brand: 'Calvin Klein',
          price: 110,
          reviews: [5, 5, 5, 4, 4],
          recommended: true,
        },
        {
          id: 8,
          name: 'Calvin Klein',
          image: 'assets/images/products/bk7.jpg',
          category: 'Hoodie',
          size: ['S', 'M'],
          brand: 'Calvin Klein',
          price: 95,
          reviews: [4, 4, 5, 4, 5],
        },
        {
          id: 9,
          name: 'Tommy Hilfinger dzemper',
          image: 'assets/images/products/dz1.jpg',
          category: 'Sweatshirt',
          size: ['L','XL','XXL'],
          brand: 'Tommy Hilfinger',
          price: 105,
          reviews: [5, 4, 4, 5, 5],
          discount: 15,
        },
        {
          id: 10,
          name: 'Hugo Boss dzemper',
          image: 'assets/images/products/dz3.jpg',
          category: 'Sweatshirt',
          size: ['XL', 'XXL'],
          brand: 'Hugo Boss',
          price: 100,
          reviews: [4, 4, 5, 4, 5],
        },
        {
          id: 11,
          name: 'Diesel dzemper',
          image: 'assets/images/products/dz4.jpg',
          category: 'Sweatshirt',
          size: ['XL', 'XXL'],
          brand: 'Diesel',
          price: 120,
          reviews: [4, 3, 5, 4, 3],
        },
        {
          
            id: 12,
            name: 'Diesel dzemper',
            image: 'assets/images/products/dz5.jpg',
            category: 'Sweatshirt',
            size: ['L','XL', 'XXL'],
            brand: 'Diesel',
            price: 125,
            reviews: [4, 3, 3, 4, 3],
          
        },
        {
          
            id: 13,
            name: 'Hugo Boss Jacket',
            image: 'assets/images/products/j1.jpg',
            category: 'Jacket',
            size: ['S','M','L','XL', 'XXL'],
            brand: 'Hugo Boss',
            price: 350,
            reviews: [5, 5, 5, 5, 5],
          
        },
        {
          
            id: 14,
            name: 'Scotch&Soda Jacket',
            image: 'assets/images/products/j2.jpg',
            category: 'Jacket',
            size: ['M','L', 'XXL'],
            brand: 'Scotch&Soda',
            price: 275,
            reviews: [5, 3, 4, 5, 2],
          
        },
        {
          
            id: 15,
            name: 'Hugo Boss Jacket',
            image: 'assets/images/products/j3.jpg',
            category: 'Jacket',
            size: ['S','XL', 'XXL'],
            brand: 'Hugo Boss',
            price: 320,
            reviews: [5, 3, 3, 5, 2],
          
        },
        {
          
            id: 16,
            name: 'Calvin Klein Jacket',
            image: 'assets/images/products/j4.jpg',
            category: 'Jacket',
            size: ['XL', 'XXL'],
            brand: 'Calvin Klein',
            price: 305,
            reviews: [3, 3, 3, 5, 3]
          
        },
        {
          
            id: 17,
            name: 'Calvin Klein Jacket',
            image: 'assets/images/products/j5.jpg',
            category: 'Jacket',
            size: ['S','M','XL', 'XXL'],
            brand: 'Calvin Klein',
            price: 285,
            reviews: [3, 3, 3, 3, 3]
          
        },
        {
          
            id: 18,
            name: 'Tommy Hilfinger Jacket',
            image: 'assets/images/products/j6.jpg',
            category: 'Jacket',
            size: ['M','XL', 'XXL'],
            brand: 'Tommy Hilfinger',
            price: 350,
            reviews: [5, 3, 5, 5, 5]
          
        },
        {
          
            id: 19,
            name: 'Calvin Klein Jacket',
            image: 'assets/images/products/j7.jpg',
            category: 'Jacket',
            size: ['M','L','XL', 'XXL'],
            brand: 'Calvin Klein',
            price: 330,
            reviews: [5, 5, 5, 5, 5]
          
        },
        {
          
            id: 20,
            name: 'Tommy Hilfinger Shirt',
            image: 'assets/images/products/m1.jpg',
            category: 'T-shirt',
            size: ['M','XL', 'XXL'],
            brand: 'Tommy Hilfinger',
            price: 50,
            reviews: [4, 3, 5, 4, 5]
          
        },
        {
          
            id: 21,
            name: 'Tommy Hilfinger Shirt',
            image: 'assets/images/products/m2.jpg',
            category: 'T-shirt',
            size: ['M','L','XL', 'XXL'],
            brand: 'Tommy Hilfinger',
            price: 70,
            reviews: [4, 5, 5, 4, 5]
          
        },
        {
          
            id: 22,
            name: 'Tommy Hilfinger Shirt',
            image: 'assets/images/products/m3.jpg',
            category: 'T-shirt',
            size: ['S','XXL'],
            brand: 'Tommy Hilfinger',
            price: 75,
            reviews: [4, 5, 5, 5, 5]
        },
        {
          
            id: 23,
            name: 'Superdry Shirt',
            image: 'assets/images/products/m4.jpg',
            category: 'T-shirt',
            size: ['S','M','L','XL', 'XXL'],
            brand: 'Superdry',
            price: 55,
            reviews: [4, 3, 5, 2, 5]
        },
        {
          
            id: 24,
            name: 'Superdry Shirt',
            image: 'assets/images/products/m5.jpg',
            category: 'T-shirt',
            size: ['S','M','L','XL', 'XXL'],
            brand: 'Superdry',
            price: 45,
            reviews: [4, 3, 4, 2, 5]
        },
        {
          
            id: 25,
            name: 'Scotch&Soda Shirt',
            image: 'assets/images/products/m6.jpg',
            category: 'T-shirt',
            size: ['S','M','L'],
            brand: 'Scotch&Soda',
            price: 95,
            reviews: [3, 3, 4, 3, 5]
        },
        {
          
            id: 26,
            name: 'Scotch&Soda Shirt',
            image: 'assets/images/products/m7.jpg',
            category: 'T-shirt',
            size: ['L','XL', 'XXL'],
            brand: 'Scotch&Soda',
            price: 85,
            reviews: [4, 2, 4, 2, 5]
        },
        {
          
            id: 27,
            name: 'Hugo Boss Hoodie',
            image: 'assets/images/products/sk1.jpg',
            category: 'Hoodie',
            size: ['L','XL', 'XXL'],
            brand: 'Hugo Boss',
            price: 135,
            reviews: [4, 5, 4, 3, 4]
        },
        {
          
            id: 28,
            name: 'Hugo Boss Hoodie',
            image: 'assets/images/products/sk2.jpg',
            category: 'Hoodie',
            size: ['L','XL', 'XXL'],
            brand: 'Hugo Boss',
            price: 145,
            reviews: [5, 5, 5, 5, 4]
        },
        {
          
            id: 29,
            name: 'Hugo Boss Hoodie',
            image: 'assets/images/products/sk3.jpg',
            category: 'Hoodie',
            size: ['S','L','XL', 'XXL'],
            brand: 'Hugo Boss',
            price: 165,
            reviews: [3, 3, 5, 5, 4]
        },
        {
          
            id: 30,
            name: 'Hugo Boss Hoodie',
            image: 'assets/images/products/sk4.jpg',
            category: 'Hoodie',
            size: ['S','L'],
            brand: 'Hugo Boss',
            price: 125,
            reviews: [5, 4, 4, 5, 4]
        },
        {
          
            id: 31,
            name: 'Superdry Hoodie',
            image: 'assets/images/products/sk5.jpg',
            category: 'Hoodie',
            size: ['S','M','L','XL','XXL'],
            brand: 'Superdry',
            price: 120,
            reviews: [5, 5, 5, 5, 4]
        },
        {
          
            id: 32,
            name: 'Calvin Klein Hoodie',
            image: 'assets/images/products/sk6.jpg',
            category: 'Hoodie',
            size: ['S','M','L'],
            brand: 'Calvin Klein',
            price: 160,
            reviews: [5, 5, 5, 5, 4]
        },
        {
          
            id: 33,
            name: 'Calvin Klein Hoodie',
            image: 'assets/images/products/sk7.jpg',
            category: 'Hoodie',
            size: ['S','M','L'],
            brand: 'Calvin Klein',
            price: 130,
            reviews: [2, 2, 5, 2, 4]
        }
    ]
    getProductById(id:number){
      return ProductService.ProductList.find(product => product.id == id);
    }
    getProducts(){
      return this.sortByID(ProductService.ProductList);
    }
    getMaximumPrice(){
      return Math.max(...ProductService.ProductList.map(itm => itm.price));
    }
    getMinPrice(){
      return Math.min(...ProductService.ProductList.map(itm => itm.price));
    }
    getCategories(){
      let set = new Set();
      ProductService.ProductList.forEach(itm => set.add(itm.category));
      let categoriesArray:any[] = [];
      set.forEach(category => {
        categoriesArray.push(category);
      });
      return categoriesArray;
    }
    getBrand(){
      let set = new Set();
      ProductService.ProductList.forEach(itm => set.add(itm.brand));
      let manArray:any[] = [];
      set.forEach(manu => {
        manArray.push(manu);
      });
      return manArray;
    }
    getSizes(){
      let set = new Set();
      ProductService.ProductList.forEach(itm => itm.size.forEach(sze => set.add(sze)));
      let sizesArray:any[] = [];
      set.forEach(size => {
        sizesArray.push(size);
      });
      return sizesArray;
    }
    getRecommended(){
        return ProductService.ProductList.filter(pr => pr.recommended);
    }
    sortByDiscount(products:Product[]){
      return products.sort((a,b) => (b.discount === undefined ? 0:b.discount) - (a.discount === undefined ? 0:a.discount));
    }
    sortByPrice(ascending:boolean, products:Product[]){
      if(ascending){
        return products.sort((a,b) => a.price - b.price);
      } else {
        return products.sort((a,b) => b.price - a.price);
      }
    }
    sortByID(products:Product[]){
      return products.sort((a,b) => a.id - b.id);
    }
    sortByReviewsCount(ascending:boolean, products:Product[]){
      if(ascending){
        return products.sort((a,b) => a.reviews.length - b.reviews.length);
      } else {
        return products.sort((a,b) => b.reviews.length - a.reviews.length);
      }
    }
    sortByRating(ascending:boolean, products:Product[]){
      if(ascending){
        return products.sort((a,b) => (a.reviews.reduce((a,b) => {return a+b;}, 0))/a.reviews.length - (b.reviews.reduce((a,b) => {return a+b;}, 0))/b.reviews.length);
      } else {
        return products.sort((a,b) => (b.reviews.reduce((a,b) => {return a+b;}, 0))/b.reviews.length - (a.reviews.reduce((a,b) => {return a+b;}, 0))/a.reviews.length);
      }
    }
    filter(categories: string[], sizes: string[], brand: string[], minValue: number, maxValue: number, search_input:string) {
      return ProductService.ProductList.filter(product => categories.includes(product.category) && product.size.some(size => sizes.includes(size)) && brand.includes(product.brand )&& (product.price >= minValue && product.price <= maxValue) && (product.name.toLocaleLowerCase().trim().includes(search_input)));
    }
    filterByCategory(category: string){
      return ProductService.ProductList.filter(product => product.category === category);
    }
    filterByBrand(brand: string){
      return ProductService.ProductList.filter(product => product.brand === brand);
    }
}