import { connectPostgres } from "../connectors/Postgres";
export const db: any = connectPostgres()
/*
User={
    email: string,
    password: string,
    phonenumber: string,
} */

//Create user function

export const createUser = async ({
email,
password,
phonenumber,


}: {
email: string,
password: string,
phonenumber: string,


}) => {
  

    const user = await db.query(
      `INSERT INTO users (email, password, phonenumber) VALUES ($[email], $[password], $[phonenumber]) RETURNING *`,
      {
        email,
        password,
        phonenumber
    
      }
    )

    return user
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

//check users with email and password

export const checkUser = async ({ email, password }: { email: string, password: string }) => {
    const user = await db.oneOrNone(`SELECT * FROM users WHERE email = $[email] AND password = $[password]`, { email, password })
    return user
}



export const UserOperations = {
    createUser,
    getAllUsers,
    getsingleUser,
    deleteUser,
    checkUser


  }

export default UserOperations