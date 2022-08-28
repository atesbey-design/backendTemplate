"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Server = async (app, opts) => {
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
};
exports.Server = Server;
exports.default = exports.Server;
//# sourceMappingURL=Server.js.map