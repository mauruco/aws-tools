const AWS = require('aws-sdk');
const { getObjectPromise } = require('./src/s3');
const { docClientPutPromise } = require('./src/dynamoDB');

// s3
const s3GetObjectPromise = (options) => getObjectPromise(new AWS.S3(), options);

// dynamo
const dynamDocClientPutPromise = (params) => docClientPutPromise(new AWS.DynamoDB.DocumentClient(), params);

module.exports = {
  AWS,
  s3GetObjectPromise,
  dynamDocClientPutPromise,
};
