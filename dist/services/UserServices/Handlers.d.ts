import { FastifyReply, FastifyRequest } from 'fastify';
export declare type TUsers = {
    id: number;
    email: string;
    password: string;
};
export declare const getAllUsers: (req: FastifyRequest, rep: FastifyReply) => Promise<any>;
export declare const getsingleUser: (req: FastifyRequest<{
    Params: {
        id: number;
    };
}>, rep: FastifyReply) => Promise<any>;
export declare const createUser: (req: FastifyRequest<{
    Body: {
        id: number;
        email: string;
        password: string;
        phonenumber: string;
    };
}>, reply: FastifyReply) => Promise<void>;
export declare const deleteUser: (req: FastifyRequest<{
    Params: {
        id: number;
    };
}>, reply: FastifyReply) => Promise<void>;
export declare const resetPassword: (req: FastifyRequest<{
    Body: {
        email: string;
        password: string;
    };
}>, rep: FastifyReply) => Promise<any>;
export declare const UserHandlers: {
    getAllUsers: (req: FastifyRequest, rep: FastifyReply) => Promise<any>;
    getsingleUser: (req: FastifyRequest<{
        Params: {
            id: number;
        };
    }>, rep: FastifyReply) => Promise<any>;
    createUser: (req: FastifyRequest<{
        Body: {
            id: number;
            email: string;
            password: string;
            phonenumber: string;
        };
    }>, reply: FastifyReply) => Promise<void>;
    deleteUser: (req: FastifyRequest<{
        Params: {
            id: number;
        };
    }>, reply: FastifyReply) => Promise<void>;
};
export default UserHandlers;
