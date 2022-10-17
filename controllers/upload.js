// const request = require('request');
// const fs = require('fs');

// module.exports = {
//     upload
// }

// function upload(req, res) {
//     console.log(req.file)
//   }

// function base64_encode(image) {
//   // read binary data
//   var bitmap = fs.readFileSync(image);
//   const options = {
//     method: 'POST',
//     url: 'https://api.imgur.com/3/image',
//     headers: {
//       Authorization: `Client-ID ${process.env.IMG_CLIENT_ID}`,
//     },
//     formData: {
//       image: image,
//       type: 'base64'
//     },
// }

// request(options, function(err, response) {
//     if (err) return console.log(err);
//     let body = JSON.parse(response.body)
//     console.log(body)
//     // Mongoose query here to save to db
//     // body.data.link points to imgur url
//     res.send(`<img src=${body.data.link}>`)
//   })
//   // convert binary data to base64 encoded string
//   return bitmap.toString('base64');
// }