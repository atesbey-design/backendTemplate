import { connectPostgres } from "../connectors/Postgres";
export const db: any = connectPostgres();
//create announcement

/*
const blog{
  id: number;
  blogData: string;
  imgUrl: string;
}*/
//create blog
export const createBlog = async ({
    id,
    blogData,
    imgUrl
}:{
    id: number;
    blogData: string;
    imgUrl: string;
}) => {
    const result = await db.query(
        `INSERT INTO blog (id, blogData, imgUrl) VALUES ($1, $2, $3) RETURNING *`,
        [id, blogData, imgUrl]
    );
    return result;
}
//getAllBlog
export const getAllBlog = async () => {
    const result = await db.query(`SELECT * FROM blog`);
    return result;
}
//getBlogById
export const getBlogById = async (id:number) => {
    const result = await db.query(`SELECT * FROM blog WHERE id = $1`, [id]);
    return result.rows[0];
}
//updateBlog
export const updateBlog = async ({id, blogData, imgUrl}:{
    id: number;
    blogData: string;
    imgUrl: string;
}) => {
    const result = await db.query(
        `UPDATE blog SET blogData = $1, imgUrl = $2 WHERE id = $3 RETURNING *`,
        [blogData, imgUrl, id]
    );
    return result;
}
//deleteBlog
export const deleteBlog = async (id:number) => {
    const result = await db.query(`DELETE FROM blog WHERE id = $1`, [id]);
    return result;
}


export const BlogOperations = {
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog

 
};

export default BlogOperations;
