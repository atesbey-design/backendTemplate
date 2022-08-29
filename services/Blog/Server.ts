import { FastifyPluginAsync } from 'fastify'

import {
  getAllBlog,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog


} from './Handlers'

export const blogService: FastifyPluginAsync = async (
  app,
  opts
): Promise<void> => {
  //Announcment Request

  app.get('/', (req, res) => {
    res.send('BlogService')
  })
app.get("/blog", getAllBlog),
app.post("/createBlog", createBlog),
app.get("/blog/:id", getBlogById),
app.post("/updateBlog/:id", updateBlog),
app.delete("/blog/:id", deleteBlog)
}

export default blogService
