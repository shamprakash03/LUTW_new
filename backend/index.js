const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDb = require('./config/db')
const router = require('./routes')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()
const allowedOrigins = ['http://localhost:3000','https://www.youtube.com']
app.use(cors({
    origin: '*' || function (origin, callback){
        if (!origin) return callback(null, true);

        // Check if the origin is in the allowed origins list
        if (allowedOrigins.indexOf(origin) === -1) {
          const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}))
app.use(bodyParser.json())
app.use(bodyParser.json({ limit: '40mb' }));
app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }));
app.use(express.json())
// console.log(router);
app.use("/api", router)
app.post('/api/category-details',(req, res) => {
    console.log(req);
})
app.use(cookieParser())

const PORT = 8080 || process.env.PORT;
console.log(PORT);
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("listening on port");
        // console.log("server listening on port");
    })
})

