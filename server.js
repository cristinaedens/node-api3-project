const express = require('express');

const server = express();
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');
//middleware
const helmet = require('helmet');
// const cors = require('cors');

server.use(express.json());
server.use(helmet());
// server.use(cors);
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;