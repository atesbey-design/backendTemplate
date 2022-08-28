"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOperations = exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.db = void 0;
const Postgres_1 = require("../connectors/Postgres");
exports.db = (0, Postgres_1.connectPostgres)();
const createProduct = async ({ id, name, price, image, description, stock, hidden }) => {
    const product = await exports.db.query(`INSERT INTO products (name, price, image, description, stock, hidden) VALUES ($[name], $[price], $[image], $[description], $[stock], $[hidden]) RETURNING *`, {
        name,
        price,
        image,
        description,
        stock,
        hidden
    });
    return product;
};
exports.createProduct = createProduct;
const getAllProducts = async () => {
    const products = await exports.db.query(`SELECT * FROM products`);
    return products;
};
exports.getAllProducts = getAllProducts;
const getProductById = async (id) => {
    const product = await exports.db.oneOrNone(`SELECT * FROM products WHERE id = $[id]`, {
        id
    });
    return product;
};
exports.getProductById = getProductById;
const updateProduct = async ({ id, name, price, image, description, stock, hidden }) => {
    const product = await exports.db.query(`UPDATE products SET name = $[name], price = $[price], image = $[image], description = $[description], stock = $[stock], hidden = $[hidden] WHERE id = $[id] RETURNING *`, {
        name,
        price,
        image,
        description,
        stock,
        hidden,
        id
    });
    return product;
};
exports.updateProduct = updateProduct;
const deleteProduct = async (id) => {
    const product = await exports.db.query(`DELETE FROM products WHERE id = $[id]`, {
        id
    });
    return product;
};
exports.deleteProduct = deleteProduct;
exports.ProductOperations = {
    createProduct: exports.createProduct,
    getAllProducts: exports.getAllProducts,
    getProductById: exports.getProductById,
    updateProduct: exports.updateProduct,
    deleteProduct: exports.deleteProduct
};
exports.default = exports.ProductOperations;
//# sourceMappingURL=ProductOperations.js.map