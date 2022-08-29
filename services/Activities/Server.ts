import { FastifyPluginAsync } from 'fastify'

import {
    getallActivities,
    createActivity,
    getActivityById,
    updateActivity,
    deleteActivity



} from './Handlers'

export const blogService: FastifyPluginAsync = async (
  app,
  opts
): Promise<void> => {
  //Announcment Request

app.get("/activity", getallActivities),
app.post("/createActivity", createActivity),
app.get("/activity/:id", getActivityById),
app.post("/updateActivity/:id", updateActivity),
app.delete("/activity/:id", deleteActivity)
}

export default blogService
