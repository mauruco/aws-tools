const docClientPutPromise = (docClient, params) => new Promise((resolve, reject) => {
  docClient.put(params, (err, data) => {
    if (err) return reject(err);
    return resolve(data);
  });
});


const docClientGetPromise = (docClient, params) => new Promise((resolve, reject) => {
  docClient.get(params, (err, data) => {
    if (err) return reject(err);
    return resolve(data);
  });
});


const docClientQueryPromise = (docClient, params) => new Promise((resolve, reject) => {
  docClient.query(params, (err, data) => {
    if (err) return reject(err);
    return resolve(data);
  });
});


module.exports = {
  docClientPutPromise,
  docClientGetPromise,
  docClientQueryPromise,
};
