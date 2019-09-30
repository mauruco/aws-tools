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
 * s3GetObjectPromise
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

// SET THE REGION BEFOR USING
AWS.config.update({ region: 'us-east-1' });

/**
 * dynamDocClientPutPromise
 * @params docClient params
 * @returns added item
 */
(async () => {
  try {
    const params = {
        TableName: 'tableName',
        Item: { ... },
    };
    const data = await dynamDocClientPutPromise(params);
    const item = JSON.parse(data);
    console.log(item);
  } catch (error) {
    console.log(error);
  }
})();

/**
 * dynamDocClientGetPromise
 * @params docClient params
 * @returns item
 */
(async () => {
  try {
    const params = {
        TableName: 'tableName',
        Key: {
            someKey: 'someKeyName',
            someSortKey: 'someSortKeyName',
        },
    };
    const data = await dynamDocClientGetPromise(params);
    const item = JSON.parse(data);
    console.log(item);
  } catch (error) {
    console.log(error);
  }
})();

/**
 * dynamDocClientQueryPromise
 * @params docClient params
 * @returns added items
 */
(async () => {
  try {
    let params = {
        TableName: 'tableName',
        KeyConditionExpression: '#d = :dd',
        ExpressionAttributeNames: {
            '#d': 'someDomainKey',
        },
        ExpressionAttributeValues: {
            ':dd': 'someValue',
        },
    };
    const data = await dynamDocClientQueryPromise(params);
    const items = JSON.parse(data);

    if (items.LastEvaluatedKey) { // Has more itens
        params.ExclusiveStartKey = items.LastEvaluatedKey; // start from
        // ... redo
    }

    console.log(item);
  } catch (error) {
    console.log(error);
  }
})();
```
