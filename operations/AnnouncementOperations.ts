import { connectPostgres } from "../connectors/Postgres";
export const db: any = connectPostgres();
//create announcement

export const createAnnoucement = async ({
    id,
    title,
    image,
    description,
  
}: {
    id: number,
    image: string,
    title: string,
    description: string,
  


}) => {

    const annoucment = await db.query(
        `INSERT INTO announcements (id, title, image, description) VALUES ($[id], $[title], $[image], $[description]) RETURNING *`,
        {
            id,
            title,
            image,
            description
        }
    )

    return annoucment
}
//getAllAnnoucment
export const getAllAnnoucment = async () => {
    
        const annoucment = await db.query(
            `SELECT * FROM announcements`
        )
    
        return annoucment
}
//getAnnoucmentById
export const getAnnoucmentById = async (id: number) => {
        
            const annoucment = await db.query(
                `SELECT * FROM announcements WHERE id = $[id]`,
                {
                    id
                }
            )
        
            return annoucment
}
//updateAnnoucment
export const updateAnnoucment = async (id: number, title: string, image: string, description: string) => {
    const annoucment = await db.query(
        `UPDATE announcements SET title = $[title], image = $[image], description = $[description] WHERE id = $[id] RETURNING *`,
        {
            id,
            title,
            image,
            description
        }
    )

    return annoucment
}
//deleteAnnoucment
export const deleteAnnoucment = async (id: number) => {
    const annoucment = await db.query(
        `DELETE FROM announcements WHERE id = $[id]`,
        {
            id
        }
    )

    return annoucment
}


export const AnnouncementOperations = {
  createAnnoucement,
  getAllAnnoucment,
    getAnnoucmentById,
    updateAnnoucment,
    deleteAnnoucment
    
 
};

export default AnnouncementOperations;
