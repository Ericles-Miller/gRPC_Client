import "reflect-metadata";
import { RequestMessgesController } from "@modules/messages/useCase/RequestMessgesController";

async function SeedClientGRPC() {
  console.log("Iniciando SeedClient_gRPC...");

  const requestMessgesController = new RequestMessgesController()

  while (true) {
    try {
      console.log("Handling messages...");
      await requestMessgesController.handle();
      console.log("Handled messages successfully.");
    } catch (error) {
      console.error("Error handling messages:", error);
    }

    // Aguarde um intervalo de tempo antes de verificar novamente a fila
    await new Promise((resolve) => setTimeout(resolve, 5000)); // por exemplo, aguarde 5 segundos
  }
}

// Chame a função assíncrona para iniciar o script
SeedClientGRPC();