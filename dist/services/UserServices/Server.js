"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const Handlers_1 = require("./Handlers");
const UserService = async (app, opts) => {
    app.get('/allUsers', Handlers_1.getAllUsers);
    app.get('/allUsers/:id', Handlers_1.getsingleUser);
    app.post('/deleteUser/:id', Handlers_1.deleteUser);
    app.post('/createUser', Handlers_1.createUser);
};
exports.UserService = UserService;
exports.default = exports.UserService;
//# sourceMappingURL=Server.js.map