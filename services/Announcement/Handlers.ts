import { FastifyReply, FastifyRequest } from "fastify";
import { AnnouncementOperations } from "../../operations/AnnouncementOperations";

//Get All Annoucment postgres
export const getAllAnnoucement = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const annoucment = await AnnouncementOperations.getAllAnnoucment();

  if (annoucment) {
    reply.send(annoucment);
  } else {
    reply.send(null);
  }
};
//Create Annoucment
export const createAnnoucement = async (
  req: FastifyRequest<{
    Params: {
      hidden: boolean;
    };
    Body: {
      id: number;
      title: string;
      description: string;
      image: string;
    };
  }>,
  reply: FastifyReply
) => {
  const annoucment = await AnnouncementOperations.createAnnoucement({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });

  reply.code(200).send({
    message: "create annoucment success",
    data: annoucment,
  });

  reply.code(500).send({
    message: "create annoucment failed",
  });
};
//Get Annoucment By Id
export const getAnnoucmentById = async (
  req: FastifyRequest<{
    Params: { id: number };
  }>,
  reply: FastifyReply
) => {
  const annoucment = await AnnouncementOperations.getAnnoucmentById(
    req.params.id
  );

  if (annoucment) {
    reply.send(annoucment);
  } else {
    reply.send(null);
  }
};
//Update Annoucment
export const updateAnnoucment = async (
  req: FastifyRequest<{
    Body: {
      id: number;
      title: string;
      description: string;
      image: string;
    };
  }>,
  reply: FastifyReply
) => {
  const annoucment = await AnnouncementOperations.updateAnnoucment(
    req.body.id,
    req.body.title,
    req.body.description,
    req.body.image
  );

  if (annoucment) {
    reply.send(annoucment);
  } else {
    reply.send(null);
  }
};
//Delete Annoucment
export const deleteAnnoucment = async (
  req: FastifyRequest<{
    Params: { id: number };
  }>,
  reply: FastifyReply
) => {
  const annoucment = await AnnouncementOperations.deleteAnnoucment(
    req.params.id
  );

  if (annoucment) {
    reply.send(annoucment);
  } else {
    reply.send(null);
  }
};

export default {
  createAnnoucement,
  getAllAnnoucement,
  getAnnoucmentById,
  updateAnnoucment,
  deleteAnnoucment,
};
