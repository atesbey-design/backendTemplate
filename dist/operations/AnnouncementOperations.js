"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementOperations = exports.deleteAnnouncement = exports.updateAnnoucment = exports.getAnnoucmentById = exports.getAllAnnoucment = exports.createAnnoucment = exports.db = void 0;
const Postgres_1 = require("../connectors/Postgres");
exports.db = (0, Postgres_1.connectPostgres)();
const createAnnoucment = async ({ id, title, image, description, hidden }) => {
    const announcement = await exports.db.query(`INSERT INTO announcements (title, image, description) VALUES ($[title], $[image], $[description]) RETURNING *`, {
        id,
        title,
        image,
        description
    });
    return announcement;
};
exports.createAnnoucment = createAnnoucment;
const getAllAnnoucment = async () => {
    const announcements = await exports.db.query(`SELECT * FROM announcements`);
    return announcements;
};
exports.getAllAnnoucment = getAllAnnoucment;
const getAnnoucmentById = async (id) => {
    const announcement = await exports.db.oneOrNone(`SELECT * FROM announcements WHERE id = $[id]`, {
        id
    });
    return announcement;
};
exports.getAnnoucmentById = getAnnoucmentById;
const updateAnnoucment = async ({ id, title, image, description, }) => {
    const announcement = await exports.db.query(`INSERT INTO announcements (title, image, description) VALUES ($[title], $[image], $[description]) RETURNING *`, {
        id,
        title,
        image,
        description,
    });
    return announcement;
};
exports.updateAnnoucment = updateAnnoucment;
const deleteAnnouncement = async (id) => {
    const announcement = await exports.db.query(`DELETE FROM announcements WHERE id = $[id]`, {
        id
    });
    return announcement;
};
exports.deleteAnnouncement = deleteAnnouncement;
exports.AnnouncementOperations = {
    createAnnoucment: exports.createAnnoucment,
    getAllAnnoucment: exports.getAllAnnoucment,
    getAnnoucmentById: exports.getAnnoucmentById,
    updateAnnoucment: exports.updateAnnoucment,
    deleteAnnouncement: exports.deleteAnnouncement
};
exports.default = exports.AnnouncementOperations;
//# sourceMappingURL=AnnouncementOperations.js.map