import fastify from 'fastify'


import UserService from './services/User/Server'
import cors from '@fastify/cors'
import Connectors from './connectors/index'
import fastifyJwt from '@fastify/jwt'
import blogService from './services/Blog/Server'
import activityService from './services/Activities/Server'
const server = fastify({ maxParamLength:700, logger: true })

server.register(fastifyJwt, {
  secret: 'selcukChainWebsite'
})

server.register(cors, {
  origin: '*',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: true
})


Connectors


server.register(UserService)

server.register(blogService)
server.register(activityService)
server.listen({ port: 11000 , host:"0.0.0.0"}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})

//TODO:Prepare App func
