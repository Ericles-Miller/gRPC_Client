import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

// Carregue a definição do seu arquivo proto
const pathAbsolut = path.resolve(__dirname, '../../client.proto');
const packageDefinition = protoLoader.loadSync(pathAbsolut);
const yourPackage = grpc.loadPackageDefinition(packageDefinition) as any;

// Crie o cliente gRPC
export const client = new yourPackage.your_package.YourService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);


