import express,{} from 'express';
const authConfig = require("../../config/auth");
const jwt = require("jsonwebtoken");

async function validateToken(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const token = req.headers['x-access-token'];

    try {
      jwt.verify(token, authConfig.secret)
    } catch (error) {
      return res.status(401).send("token invalid");
    }
    next();
  }

  export {validateToken};