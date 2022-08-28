"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connectors = exports.connectPostgres = void 0;
const Postgres_1 = require("./Postgres");
var Postgres_2 = require("./Postgres");
Object.defineProperty(exports, "connectPostgres", { enumerable: true, get: function () { return Postgres_2.connectPostgres; } });
exports.Connectors = {
    Postgres: Postgres_1.default
};
exports.default = exports.Connectors;
//# sourceMappingURL=index.js.map