const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const secret_key = process.env.secret_key;
const configureMiddleware = (app) => {
    app.use(express.json());
    app.use(cookieParser());
    app.use(
        session({
            secret: secret_key,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: false,
                maxAge: 24*60*60*1000
            }
        })
    );
};
module.exports = configureMiddleware;