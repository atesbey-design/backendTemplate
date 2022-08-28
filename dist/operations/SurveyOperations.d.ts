export declare const db: any;
export declare const createSurvey: ({ id, description, choices, images }: {
    id: number;
    description: {
        title: string;
        questions: string;
    };
    choices: {
        A: string;
        B: string;
    };
    images: {
        url: string;
    };
}) => Promise<any>;
export declare const getAllSurvey: () => Promise<any>;
export declare const getSurveyById: (id: number) => Promise<any>;
export declare const updateSurvey: ({ id, description, choices, images }: {
    id: number;
    description: {
        title: string;
        questions: string;
    };
    choices: {
        A: string;
        B: string;
    };
    images: {
        url: string;
    };
}) => Promise<any>;
export declare const deleteSurvey: (id: number) => Promise<any>;
export declare const SurveyOperations: {
    createSurvey: ({ id, description, choices, images }: {
        id: number;
        description: {
            title: string;
            questions: string;
        };
        choices: {
            A: string;
            B: string;
        };
        images: {
            url: string;
        };
    }) => Promise<any>;
    getAllSurvey: () => Promise<any>;
    getSurveyById: (id: number) => Promise<any>;
    updateSurvey: ({ id, description, choices, images }: {
        id: number;
        description: {
            title: string;
            questions: string;
        };
        choices: {
            A: string;
            B: string;
        };
        images: {
            url: string;
        };
    }) => Promise<any>;
    deleteSurvey: (id: number) => Promise<any>;
};
export default SurveyOperations;
