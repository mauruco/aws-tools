
const getObjectPromise = (s3, options) => new Promise((resolve, reject) => {
  s3.getObject(options, (error, data) => {
    if (error != null) return reject(error);
    return resolve(data);
  });
});

module.exports = {
  getObjectPromise,
};
