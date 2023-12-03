import { IMessageRepository } from "@modules/messages/infra/repositories/IMessageRepository";
import { MessageRepository } from "@modules/messages/infra/repositories/MessageRepository";
import { container } from "tsyringe";

container.registerSingleton<IMessageRepository>(
  "MessageRepository",
  MessageRepository,
);