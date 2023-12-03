import { IMessageResponseDTO } from "../dtos/IMessageREsponseDTO";

export interface IMessageRepository {
  create({ description, email, username }: IMessageResponseDTO): Promise<void>;
}