import { connectPostgres } from "../connectors/Postgres";
export const db: any = connectPostgres()
/*
User={
    imgurl: string,

    property: string,
} */

//Create user function

export const createUser = async ({
imgurl,
property,


}: {
imgurl: string;
property:{
    name:String,
    status:string,
    consensusId:number,
    attendantId:number,
    subAttendant:string,
}

}) => {
  
    const result = await db.query(
        `INSERT INTO users (imgurl, property) VALUES ($1, $2) RETURNING *`,
        [imgurl, property]
    );
    return result;
}

//Get all users function
export const getAllUsers = async () => {
  
    const users = await db.any(`SELECT * FROM users`)
    return users
}

//Get single user function
export const getsingleUser = async (id: number) => {
    const user = await db.any(`SELECT * FROM users WHERE id = $[id]`, {id})
    return user
}
//delete user function
export const deleteUser = async (id: number) => {
    const user = await db.any(`DELETE FROM users WHERE id = $[id]`, {id})
    return user
}

export const UserOperations = {
    createUser,
    getAllUsers,
    getsingleUser,
    deleteUser,



  }

export default UserOperations