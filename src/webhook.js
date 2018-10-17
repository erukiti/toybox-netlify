import moment from 'moment'

exports.handler = function(ev, ctx, cb) {
  const body = JSON.parse(ev.body)
  console.log(body, null, '  ')
  cb(null, {
    statusCode: 200,
    body: JSON.stringify({ text: moment().format() })
  })
}
