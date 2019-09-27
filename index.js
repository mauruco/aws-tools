const AWS = require('aws-sdk');
const { getObjectPromise } = require('./src/s3');

const s3GetObjectPromise = (options) => getObjectPromise(new AWS.S3(), options);

module.exports = {
  AWS,
  s3GetObjectPromise,
};
