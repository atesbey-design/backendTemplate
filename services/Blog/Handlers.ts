import { FastifyReply, FastifyRequest } from "fastify";
import BlogOperations from "../../operations/BlogOperations";


/*
const blog{
  id: number;
  blogData: string;
  imgUrl: string;
}*/

//get all blog
export const getAllBlog = async (req: FastifyRequest, res: FastifyReply) => {
  const result = await BlogOperations.getAllBlog();
  res.send(result);
}

//Create Blog
export const createBlog = async (req: FastifyRequest<
  {
    Body: {
      id: number;
      blogData: string;
      imgUrl: string;
    };
  }
>, res: FastifyReply) => {
  const result = await BlogOperations.createBlog(req.body);
  res.send(result);
}
  
//Get Blog by Id
export const getBlogById = async (req: FastifyRequest<{
  Params: {
    id: number;
  }
}>, res: FastifyReply) => {
  const result = await BlogOperations.getBlogById(req.params.id);
  res.send(result);
}
//Update Blog
export const updateBlog = async (req: FastifyRequest<{Body:{
  id: number;
  blogData: string;
  imgUrl: string;

}}>, res: FastifyReply) => {
  const result = await BlogOperations.updateBlog(req.body);
  res.send(result);
}
//Delete Blog
export const deleteBlog = async (req: FastifyRequest<{
  Params: {
    id: number;
  }
}>, res: FastifyReply) => {
  const result = await BlogOperations.deleteBlog(req.params.id);
  res.send(result);
}

export default {

  getAllBlog,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog
  
};
