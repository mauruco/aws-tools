const AWS = require('aws-sdk');
const { getObjectPromise } = require('./src/s3');
const {
  docClientPutPromise,
  docClientGetPromise,
  docClientQueryPromise,
} = require('./src/dynamoDB');

// s3
const s3GetObjectPromise = (options) => getObjectPromise(new AWS.S3(), options);

// dynamo
const dynamDocClientPutPromise = (params) => docClientPutPromise(new AWS.DynamoDB.DocumentClient(), params);
const dynamDocClientGetPromise = (params) => docClientGetPromise(new AWS.DynamoDB.DocumentClient(), params);
const dynamDocClientQueryPromise = (params) => docClientQueryPromise(new AWS.DynamoDB.DocumentClient(), params);

module.exports = {
  AWS,
  s3GetObjectPromise,
  dynamDocClientPutPromise,
  dynamDocClientGetPromise,
  dynamDocClientQueryPromise,
};
