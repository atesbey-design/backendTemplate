"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyOperations = exports.deleteSurvey = exports.updateSurvey = exports.getSurveyById = exports.getAllSurvey = exports.createSurvey = exports.db = void 0;
const Postgres_1 = require("../connectors/Postgres");
exports.db = (0, Postgres_1.connectPostgres)();
const createSurvey = async ({ id, description, choices, images }) => {
    const survey = await exports.db.query(`INSERT INTO survey (description, choices, images,id) VALUES ($[description], $[choices], $[images], $[id]) RETURNING *`, {
        description,
        choices,
        images,
        id
    });
    return survey;
};
exports.createSurvey = createSurvey;
const getAllSurvey = async () => {
    const survey = await exports.db.manyOrNone('SELECT * FROM survey');
    if (survey) {
        return survey;
    }
    else {
        return null;
    }
};
exports.getAllSurvey = getAllSurvey;
const getSurveyById = async (id) => {
    const survey = await exports.db.one(`SELECT * FROM survey WHERE id = $[id]`, { id });
    return survey;
};
exports.getSurveyById = getSurveyById;
const updateSurvey = async ({ id, description, choices, images }) => {
    const survey = await exports.db.query(`UPDATE survey SET description = $[description], choices = $[choices], images = $[images] WHERE id = $[id] RETURNING *`, {
        description,
        choices,
        images,
        id
    });
    return survey;
};
exports.updateSurvey = updateSurvey;
const deleteSurvey = async (id) => {
    const survey = await exports.db.query(`DELETE FROM survey WHERE id = $[id] RETURNING *`, { id });
    return survey;
};
exports.deleteSurvey = deleteSurvey;
exports.SurveyOperations = {
    createSurvey: exports.createSurvey,
    getAllSurvey: exports.getAllSurvey,
    getSurveyById: exports.getSurveyById,
    updateSurvey: exports.updateSurvey,
    deleteSurvey: exports.deleteSurvey
};
exports.default = exports.SurveyOperations;
//# sourceMappingURL=SurveyOperations.js.map