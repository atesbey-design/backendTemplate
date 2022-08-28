import { FastifyPluginAsync } from 'fastify'



import { createUser, getAllUsers, getsingleUser, deleteUser} from './Handlers'

export const UserService: FastifyPluginAsync = async (
  app,
  opts
): Promise<void> => {
  app.get('/userService', (req, res) => {
    res.send('userService')
  })
  app.get('/allUsers', getAllUsers)
  app.get('/allUsers/:id', getsingleUser)
  app.post('/deleteUser/:id', deleteUser)
  app.post('/createUser', createUser)

}
export default UserService
