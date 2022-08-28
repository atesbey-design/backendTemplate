"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOperations = exports.deleteUser = exports.getsingleUser = exports.getAllUsers = exports.createUser = exports.db = void 0;
const Postgres_1 = require("../connectors/Postgres");
exports.db = (0, Postgres_1.connectPostgres)();
const createUser = async ({ email, password, phonenumber }) => {
    const user = await exports.db.query(`INSERT INTO users (email, password, phonenumber) VALUES ($[email], $[password], $[phonenumber]) RETURNING *`, {
        email,
        password,
        phonenumber
    });
    return user;
};
exports.createUser = createUser;
const getAllUsers = async () => {
    const users = await exports.db.any(`SELECT * FROM users`);
    return users;
};
exports.getAllUsers = getAllUsers;
const getsingleUser = async (id) => {
    const user = await exports.db.any(`SELECT * FROM users WHERE id = $[id]`, { id });
    return user;
};
exports.getsingleUser = getsingleUser;
const deleteUser = async (id) => {
    const user = await exports.db.any(`DELETE FROM users WHERE id = $[id]`, { id });
    return user;
};
exports.deleteUser = deleteUser;
exports.UserOperations = {
    createUser: exports.createUser,
    getAllUsers: exports.getAllUsers,
    getsingleUser: exports.getsingleUser,
    deleteUser: exports.deleteUser
};
exports.default = exports.UserOperations;
//# sourceMappingURL=UserOperations.js.map