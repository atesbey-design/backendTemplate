
/* const activity{
    imgurl: string,
    activitieData:{
        title:string,
        description:string,
    }
}*/

import { db } from "./UserOperations";

//create activity
export const createActivity = async ({imgurl,data}:{
    imgurl: string;
    data:{
        title:string,
        description:string,
    }
}) => {
    const result = await db.query(
        `INSERT INTO  activities (imgurl, data) VALUES ($1, $2) RETURNING *`,
        [imgurl, data]
    );
    return result;
}
//getAllActivity
export const getAllActivity = async () => {
    const result = await db.query(`SELECT * FROM activities`);
   return result;

}
//getActivityById
export const getActivityById = async (id:number) => {
    const result = await db.query(`SELECT * FROM activities WHERE id = $1`, [id]);
    return result;
}

//updateActivity
export const updateActivity = async ({imgurl,data,id}:{
    id: number;
    imgurl: string;
    data:{
        title:string,
        description:string,
    }
}) => {
    const result = await db.query(
        `UPDATE activities SET imgurl = $1, data = $2 WHERE id = $3 RETURNING *`,
        [imgurl, data,id]
    );
    return result.rows[0];
}
//deleteActivity
export const deleteActivity = async (id:number) => {
    const result = await db.query(`DELETE FROM activities WHERE id = $1`, [id]);
    return result;
}

export const ActivityOperations = {
    createActivity, 
    getAllActivity,
    getActivityById,
    updateActivity,
    deleteActivity
}

