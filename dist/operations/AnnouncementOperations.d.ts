export declare const db: any;
export declare const createAnnoucment: ({ id, title, image, description, hidden }: {
    id: number;
    title: {
        title: string;
    };
    image: {
        url: string;
    };
    description: {
        description: string;
    };
    hidden: boolean;
}) => Promise<any>;
export declare const getAllAnnoucment: () => Promise<any>;
export declare const getAnnoucmentById: (id: number) => Promise<any>;
export declare const updateAnnoucment: ({ id, title, image, description, }: {
    id: number;
    title: {
        title: string;
    };
    image: {
        url: string;
    };
    description: {
        description: string;
    };
    hidden: boolean;
}) => Promise<any>;
export declare const deleteAnnouncement: (id: number) => Promise<any>;
export declare const AnnouncementOperations: {
    createAnnoucment: ({ id, title, image, description, hidden }: {
        id: number;
        title: {
            title: string;
        };
        image: {
            url: string;
        };
        description: {
            description: string;
        };
        hidden: boolean;
    }) => Promise<any>;
    getAllAnnoucment: () => Promise<any>;
    getAnnoucmentById: (id: number) => Promise<any>;
    updateAnnoucment: ({ id, title, image, description, }: {
        id: number;
        title: {
            title: string;
        };
        image: {
            url: string;
        };
        description: {
            description: string;
        };
        hidden: boolean;
    }) => Promise<any>;
    deleteAnnouncement: (id: number) => Promise<any>;
};
export default AnnouncementOperations;
