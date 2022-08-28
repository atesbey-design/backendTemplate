"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHandlers = exports.resetPassword = exports.deleteUser = exports.createUser = exports.getsingleUser = exports.getAllUsers = void 0;
const Postgres_1 = require("../../connectors/Postgres");
const UserOperations_1 = require("../../operations/UserOperations");
const getAllUsers = async (req, rep) => {
    const users = await UserOperations_1.UserOperations.getAllUsers();
    return users;
};
exports.getAllUsers = getAllUsers;
const getsingleUser = async (req, rep) => {
    const { id } = req.params;
    const user = await UserOperations_1.UserOperations.getsingleUser(id);
    return user;
};
exports.getsingleUser = getsingleUser;
const createUser = async (req, reply) => {
    const user = await UserOperations_1.UserOperations.createUser({
        email: req.body.email,
        password: req.body.password,
        phonenumber: req.body.phonenumber
    });
    reply.code(200).send({
        message: 'create user success',
        data: user
    });
    reply.code(500).send({
        message: 'create user failed'
    });
};
exports.createUser = createUser;
const deleteUser = async (req, reply) => {
    const user = await UserOperations_1.UserOperations.deleteUser(req.params.id);
    reply.code(200).send({
        message: 'delete user success',
        data: user
    });
};
exports.deleteUser = deleteUser;
const resetPassword = async (req, rep) => {
    const db = (0, Postgres_1.connectPostgres)();
    const result = await db.any('UPDATE users SET password =$[password] WHERE email = ${req.body.email}', {
        password: req.body.password
    });
    console.log('email', req.body.email);
    console.log('password', req.body.password);
    rep.code(200).send({
        message: 'Reset password success'
    });
    return result;
};
exports.resetPassword = resetPassword;
exports.UserHandlers = {
    getAllUsers: exports.getAllUsers,
    getsingleUser: exports.getsingleUser,
    createUser: exports.createUser,
    deleteUser: exports.deleteUser
};
exports.default = exports.UserHandlers;
//# sourceMappingURL=Handlers.js.map