exports.handler = function(ev, ctx, cb) {
  cb(null, {
    statusCode: 200,
    body: 'Hello, World.'
  })
}
