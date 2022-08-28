
import { connectPostgres } from '../../connectors/Postgres'
import { FastifyReply, FastifyRequest } from 'fastify'
import { UserOperations } from '../../operations/UserOperations'








//getAllUsers
export const getAllUsers = async (req: FastifyRequest, rep: FastifyReply) => {
  const users = await UserOperations.getAllUsers().catch((err)=>console.log(err))
  return users
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
   
      email: string
      password: string
      phonenumber: string
  
    }
  }>,
  reply: FastifyReply
) => {
  const { email, password,phonenumber} = req.body


  const user = await UserOperations.createUser({
    email: email,
    password: password,
    phonenumber: phonenumber,
    
  })

  reply.code(200).send({
    message: 'create user success',
    data: user,
   
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

//reset password
export const resetPassword = async (
  req: FastifyRequest<{
    Body: {
      email: string
      password: string
    }
  }>,
  rep: FastifyReply
) => {
  const db: any = connectPostgres()
  const result = await db.any(
    'UPDATE users SET password =$[password] WHERE email = ${req.body.email}',
    {
      password: req.body.password
    }
  )
  console.log('email', req.body.email)
  console.log('password', req.body.password)
  rep.code(200).send({
    message: 'Reset password success'
  })

  return result
}



export const UserHandlers = {
  getAllUsers,
  getsingleUser,
  createUser,
  deleteUser,

}

export default UserHandlers
