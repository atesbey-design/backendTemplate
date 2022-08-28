export declare const db: any;
export declare const createProduct: ({ id, name, price, image, description, stock, hidden }: {
    id: number;
    name: string;
    price: number;
    image: {
        url: string;
    };
    description: string;
    stock: number;
    hidden: boolean;
}) => Promise<any>;
export declare const getAllProducts: () => Promise<any>;
export declare const getProductById: (id: number) => Promise<any>;
export declare const updateProduct: ({ id, name, price, image, description, stock, hidden }: {
    id: number;
    name: string;
    price: number;
    image: {
        url: string;
    };
    description: string;
    stock: number;
    hidden: boolean;
}) => Promise<any>;
export declare const deleteProduct: (id: number) => Promise<any>;
export declare const ProductOperations: {
    createProduct: ({ id, name, price, image, description, stock, hidden }: {
        id: number;
        name: string;
        price: number;
        image: {
            url: string;
        };
        description: string;
        stock: number;
        hidden: boolean;
    }) => Promise<any>;
    getAllProducts: () => Promise<any>;
    getProductById: (id: number) => Promise<any>;
    updateProduct: ({ id, name, price, image, description, stock, hidden }: {
        id: number;
        name: string;
        price: number;
        image: {
            url: string;
        };
        description: string;
        stock: number;
        hidden: boolean;
    }) => Promise<any>;
    deleteProduct: (id: number) => Promise<any>;
};
export default ProductOperations;
