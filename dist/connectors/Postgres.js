"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectPostgres = exports.connection = void 0;
const pgPromise = require("pg-promise");
exports.connection = {
    database: null
};
const connectPostgres = () => {
    if (!(exports.connection === null || exports.connection === void 0 ? void 0 : exports.connection.database)) {
        const pgp = pgPromise({});
        exports.connection.database = pgp('postgres://postgres:postgres@database:5432/app');
    }
    return exports.connection.database;
};
exports.connectPostgres = connectPostgres;
exports.default = exports.connectPostgres;
//# sourceMappingURL=Postgres.js.map