import { FastifyReply, FastifyRequest } from 'fastify';
import { ActivityOperations } from './../../operations/ActivitieOperations';



//getallActivities

export const getallActivities = async (req: FastifyRequest, res: FastifyReply) => {
    const result = await ActivityOperations.getAllActivity();
    res.send(result);
  }
  //Create activity
    export const createActivity = async (req: FastifyRequest<{Body:{
     
        data: {
            title: string;
            description: string;
        };
        imgurl: string;

    }}>, res: FastifyReply) => {
        const result = await ActivityOperations.createActivity(req.body);
        res.send(result);
    }

    //Get Activity by Id
    export const getActivityById = async (req: FastifyRequest<{Params:{
        id: number;
    }}>, res: FastifyReply) => {
        const result = await ActivityOperations.getActivityById(req.params.id);
        res.send(result);
    }

    //Update Activity
    export const updateActivity = async (req: FastifyRequest<{Body:{
        id: number;
        data: {
            title: string;
            description: string;
        }
        imgurl: string;
    }}>, res: FastifyReply) => {
        const result = await ActivityOperations.updateActivity(req.body);
        res.send(result);
    }

    //Delete Activity
    export const deleteActivity = async (req: FastifyRequest<{Params:{
        id: number;
    }}>, res: FastifyReply) => {
        const result = await ActivityOperations.deleteActivity(req.params.id);
        res.send(result);
    }

    export default{
        getallActivities,
        createActivity,
        getActivityById,
        updateActivity,
        deleteActivity

    }