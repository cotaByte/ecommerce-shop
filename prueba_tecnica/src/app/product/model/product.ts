export interface Product {
    _id: string,
    name: string,
    category: string,
    price: number,
    currency: string,
    image: {
        src: string,
        alt: string
    },
    bestseller: boolean,
    featured: boolean,
    description: string,
    people_also_buy: Product[],            
    updated_at: Date,
    created_at: Date
}
