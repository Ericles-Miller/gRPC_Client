import { container } from "tsyringe";
import { RequestMessageUseCase } from "./RequestMessagesUseCase";

export class RequestMessgesController {

  async handle(): Promise<void> {
    const requestMessgesUseCase = container.resolve(RequestMessageUseCase)

    requestMessgesUseCase.execute();
  }
}