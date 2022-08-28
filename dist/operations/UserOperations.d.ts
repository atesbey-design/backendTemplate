export declare const db: any;
export declare const createUser: ({ email, password, phonenumber }: {
    email: string;
    password: string;
    phonenumber: string;
}) => Promise<any>;
export declare const getAllUsers: () => Promise<any>;
export declare const getsingleUser: (id: number) => Promise<any>;
export declare const deleteUser: (id: number) => Promise<any>;
export declare const UserOperations: {
    createUser: ({ email, password, phonenumber }: {
        email: string;
        password: string;
        phonenumber: string;
    }) => Promise<any>;
    getAllUsers: () => Promise<any>;
    getsingleUser: (id: number) => Promise<any>;
    deleteUser: (id: number) => Promise<any>;
};
export default UserOperations;
