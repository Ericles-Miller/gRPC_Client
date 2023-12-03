import { PrismaClient } from "@prisma/client";

import { IMessageRepository } from "./IMessageRepository";
import { IMessageResponseDTO } from "../dtos/IMessageREsponseDTO";

export class MessageRepository implements IMessageRepository {
  private repository = new PrismaClient().message;

  async create({
    description,
    email,
    username,
  }: IMessageResponseDTO): Promise<void> {
    await this.repository.create({
      data: {
        description,
        email,
        username,
      },
    });
  }
}
