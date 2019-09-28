# aws-tools
Common AWS Tools Library

```javascript
// No need to import aws-sdk
const { AWS } = require('aws-tools');
console.log(AWS); // OBJ AWS Original
```

## s3
How to use:

```javascript
const { s3GetObjectPromise } = require('aws-tools');
/**
 * getObjectPromise
 * @options s3.getObject options
 * @returns file
 */
(async () => {
  try {
    const data = await s3GetObjectPromise({ Bucket: 'bucket', Key: 'file' });
    const file = JSON.parse(data.Body); // JSON.parse for json's
    console.log(file);
  } catch (error) {
    console.log(error);
  }
})();
```

## dynamoDB
How to use:

```javascript
const { AWS, dynamDocClientPutPromise } = require('aws-tools');
AWS.config.update({ region: 'us-east-1' });

const params = {
    TableName: 'tableName',
    Item: { ... },
};

/**
 * getObjectPromise
 * @params docClient params
 * @returns added item
 */
(async () => {
  try {
    const data = await dynamDocClientPutPromise(params);
    const item = JSON.parse(data);
    console.log(item);
  } catch (error) {
    console.log(error);
  }
})();
```
