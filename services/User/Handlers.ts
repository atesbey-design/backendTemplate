
import { FastifyReply, FastifyRequest } from 'fastify'
import { UserOperations } from '../../operations/UserOperations'





/*User={
  imgurl: string,

  property: string,
} */


//getAllUsers
export const getAllUsers = async (req: FastifyRequest, rep: FastifyReply) => {
  const users = await UserOperations.getAllUsers();
rep.send(users)
}

//getsingleUser
export const getsingleUser = async (
  req: FastifyRequest<{
    Params: {
      id: number
    }
  }>,
  rep: FastifyReply
) => {
  const { id } = req.params

  
  const user = await UserOperations.getsingleUser(id).catch(
    (err)=>console.log(err)
  )
  return user
}

//createUser
export const createUser = async (
  req: FastifyRequest<{
    Body: {
   
      
      imgurl: string;
      property: {
        name:String,
        status: string;
        consensusId: number;
        attendantId: number;
        subAttendant: string;
      };
    }
  }>,
  reply: FastifyReply
) => {
  const { imgurl, property } = req.body
  const result = await UserOperations.createUser({ imgurl, property })
 

  reply.code(200).send({
    message: 'create user success',
    data: result,
   
  })
  reply.code(500).send({
    message: 'create user failed'
  })
  }



  
  


//deleteUser
export const deleteUser = async (
  req: FastifyRequest<{
    Params: {
      id: number
    }
  }>,
  reply: FastifyReply
) => {
  const user = await UserOperations.deleteUser(req.params.id)
  reply.code(200).send({
    message: 'delete user success',
    data: user
  })
}

//..................................



export const UserHandlers = {
  getAllUsers,
  getsingleUser,
  createUser,
  deleteUser,

}

export default UserHandlers
