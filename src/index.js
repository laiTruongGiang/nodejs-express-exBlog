// const https = require('https');
// const fs = require('fs');
const express = require('express');                  // import ExpressJS
const morgan = require('morgan');                    // import Morgan library
const handlebars = require('express-handlebars');    // import Handlebars lib
const path = require('path');


const app = express()                               // tạo app express
const port = 3000                                   // tạo port

// ----- https: chưa học để sau!!!------
// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };
// https.createServer(options, app).listen(3100, () => {
//   console.log(`HTTPS server running at https://localhost:${port}`);
// });

// HTTP logger
// sử dụng morgan library: thư viện morgan là một middleware trong Node.js, thường dùng với Express.js để ghi log(logging) các request HTTP
app.use(morgan('commbied'))     //Log chi tiết theo chuẩn Apache Combined (bao gồm IP, timestamp, method, URL, status, referrer, user agent)
// app.use(morgan('common'))       //Log dạng ngắn hơn combined, bỏ qua referrer và user agent (chỉ IP, method, URL, status, response time)
// app.use(morgan('dev'))          //Format dành cho phát triển: log ngắn gọn và màu sắc đẹp (nếu terminal hỗ trợ)
// app.use(morgan('short'))        //Log ngắn gọn: chỉ IP, method, URL, status, response time
// app.use(morgan('tiny'))         //Format cực ngắn: chỉ method, URL, status, response time (rất gọn)

// Static file
app.use(express.static(path.join(__dirname, '/resources/public')))      // import file public/imgs/img1.jpg
console.log(path.join(__dirname, '/resources/public'))

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'                    // config lại đuôi file từ .handlebars thành .hbs
}))
app.set('view engine', 'hbs')          
app.set('views', path.join(__dirname, 'resources/views'));      // thiết lập đường dẫn đến các folder views. "__dirname": một biến toàn cục có sẵn trong Node.js đại diện cho đường dẫn tuyệt đối đến thư mục chứ file JS hiện tại
                                                                // VD ở đây __dirname sẽ là C:\documents\backEnd\nodejs\expressjs\exBlog\src
                                                                // path.join(__dirname, 'resources/views')) sẽ nỗi chuỗi để đường dẫn hiện tại thành C:\documents\backEnd\nodejs\expressjs\exBlog\src\resources\views
// console.log(__dirname)

// trang chủ
app.get('/', (req, res) => {
    res.render('home');
})
// trang giới thiệu
app.get('/about', (req, res) => {
    return res.render('about');
})
// app.get('/question', (req, res) => {
//     return res.send('Can I help you?')
// })

// khởi chạy tại cổng port
app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`)
})