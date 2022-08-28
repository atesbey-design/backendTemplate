import { FastifyPluginAsync } from 'fastify'

import {
  createAnnoucement,
  getAllAnnoucement,
  getAnnoucmentById,
  updateAnnoucment,
  deleteAnnoucment

} from './Handlers'

export const AnnouncmentService: FastifyPluginAsync = async (
  app,
  opts
): Promise<void> => {
  //Announcment Request
  app.get('/annoucementService', (req, res) => {
    res.send('announcementService')
  })
  app.post('/createAnnouncement', createAnnoucement)

  app.get('/allAnnouncement', getAllAnnoucement)
  app.get('/allAnnouncement/:id', getAnnoucmentById)
  app.put('/updateAnnouncement/:id', updateAnnoucment)
  app.delete('/deleteAnnouncement/:id', deleteAnnoucment)
  

}

export default AnnouncmentService
