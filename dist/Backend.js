"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const Server_1 = require("./services/Server");
const Server_2 = require("./services/UserServices/Server");
const cors_1 = require("@fastify/cors");
const server = (0, fastify_1.default)();
server.register(cors_1.default, {
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: true
});
server.register(require('@fastify/jwt'), {
    secret: 'supersecret'
});
server.register(Server_1.default);
server.register(Server_2.default);
server.listen({ port: 11000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`server listening on ${address}`);
});
//# sourceMappingURL=Backend.js.map