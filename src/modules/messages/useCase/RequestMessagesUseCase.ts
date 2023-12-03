import { inject, injectable } from "tsyringe";
import { MessageRepository } from "../infra/repositories/MessageRepository";
import { IMessageRepository } from "../infra/repositories/IMessageRepository";
import { client } from "jobs/gRPC_Client";
import { IMessageResponseDTO } from "../infra/dtos/IMessageREsponseDTO";

@injectable()
export class RequestMessageUseCase {
  constructor(
    @inject(MessageRepository)
    private messageRepository: IMessageRepository,
  ) {}

  async execute(): Promise<void> {
    /// Adicione um método para receber o array do servidor
    // @ts-ignore
    client.ReceiveArray = (call) => {
      call.on('data', (response : any) => {
        // Verifique se a propriedade messages existe e é um array
        if (response && Array.isArray(response.messages)) {
          // Aqui você pode manipular as mensagens recebidas do servidor
          console.log('Array de mensagens recebido:', response.messages);

          Promise.all(response.messages.map(async (message : IMessageResponseDTO) => {
            const { email, username, description } = message;

            await this.messageRepository.create({ description, email, username });
          }));
        } else {
          console.error('A propriedade messages não existe ou não é um array.');
        }
      });

      call.on('end', () => {
        console.log('Recebimento de mensagens concluído.');
      });

      call.on('error', (error : any) => {
        console.error('Erro ao receber o array de mensagens:', error);
      });

      // Você também pode adicionar um evento 'status' se necessário
      call.on('status', (status : any) => {
        console.log('Status:', status);
      });
    };
  }
}
