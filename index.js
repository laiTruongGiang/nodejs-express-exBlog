// const https = require('https');
// const fs = require('fs');
const express = require('express')  // import ExpressJS
const app = express()               // tạo app express
const port = 3000                   // tạo port

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };

// ----- https: chưa học để sau!!!------
// https.createServer(options, app).listen(3100, () => {
//   console.log(`HTTPS server running at https://localhost:${port}`);
// });

// trang chủ
app.get('/', (req, res) => {
    res.send('xin chao moi nguoi!')
})
// trang giới thiệu
app.get('/about', (req, res) => {
    var title = 'Chao mung den voi myWeb - chung toi co the giup gi cho ban?'
    return res.send(title)
})

app.get('/question', (req, res) => {
    return res.send('Can I help you?')
})

// khởi chạy tại cổng port
app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`)
})