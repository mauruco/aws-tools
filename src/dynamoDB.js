const docClientPutPromise = (docClient, params) => new Promise((resolve, reject) => {
  docClient.put(params, (err, data) => {
    if (err) return reject(err);
    return resolve(data);
  });
});


module.exports = {
  docClientPutPromise,
};
