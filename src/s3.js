
const getObjectPromise = (s3, options) => new Promise((resolve, reject) => {
  s3.getObject(options, (err, data) => {
    if (err) return reject(err);
    return resolve(data);
  });
});

module.exports = {
  getObjectPromise,
};
