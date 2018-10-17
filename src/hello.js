import moment from 'moment'

exports.handler = function(ev, ctx, cb) {
  cb(null, {
    statusCode: 200,
    body: moment().format()
  })
}
