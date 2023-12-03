// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var client_pb = require('./client_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_your_package_Message(arg) {
  if (!(arg instanceof client_pb.Message)) {
    throw new Error('Expected argument of type your_package.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_your_package_Message(buffer_arg) {
  return client_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var YourServiceService = exports.YourServiceService = {
  sendMessage: {
    path: '/your_package.YourService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.Message,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_your_package_Message,
    requestDeserialize: deserialize_your_package_Message,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  receiveMessage: {
    path: '/your_package.YourService/ReceiveMessage',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: client_pb.Message,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_your_package_Message,
    responseDeserialize: deserialize_your_package_Message,
  },
};

exports.YourServiceClient = grpc.makeGenericClientConstructor(YourServiceService);
