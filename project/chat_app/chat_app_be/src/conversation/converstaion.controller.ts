import ConversationModel, { IMember } from "./conversation";
import ConversationService from "./conversation.service";
import { Request, Response } from "express";
const ConversationController = {
  create: async (req: Request, res: Response) => {
    const { name, members } = req.body as {
      name: string;
      members: IMember[];
    };
    const converstaionService = new ConversationService(ConversationModel);
    try {
      const conversation = await converstaionService.createConversation(
        name,
        members
      );
      return res.status(200).json({
        message: "Conversation created successfully",
        conversation,
      });
    } catch (err) {
      return res.status(400).json({
        message: "Failed to create conversation",
        err,
      });
    }
  },

  getAll: async (_: Request, res: Response) => {
    
    const converstaionService = new ConversationService(ConversationModel);
    try {
      const conversations = await converstaionService.getAllConverstaions(
       
      );
      return res.status(200).json({
        message: "Conversation fetched successfully",
        conversations,
      });
    } catch (err) {
      return res.status(400).json({
        message: "Failed to fetch conversation",
        err,
      });
    }
  },
};

export default ConversationController
