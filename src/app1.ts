// const http = require("http"); // similar to import libraries or packages

// const server = http.createServer((req, res) => {
//   //creating a function server
//   console.log(req.url);
//   res.writeHead(200);
//   res.end("Hello World");
// });

// server.listen(3001, () => {
//   //assigning the port server shouyld listen to
//   console.log("Server is running on port 3001");
// });

// trying out the errors

// const express = require("express");

// import {Request, Response} from "express";

// const serever = new express();

// interface Profile{
//   name: string,
//   age: number
// }

// interface Data{
//   profile: Profile
// }

// serever.get("/getData", (req: Request, res: Response) => {
//   let data1: Data = {
//     profile: {
//       name: "Ashish",
//       age: 31,
//     },
//   };
//   // data1 = "string data";
//   console.log(data1.profile.name);
//   res.status(200).send(data1);
//   //   console.log("Hello I'm KP")
// });

// serever.listen(3005, () => {
//   console.log("Server is running on port 3004");
// });

//trying out api callsss

import express from "express";
// import employeeRouter from "../employeeRouter";
import loggerMiddleware from "./middleware/loggerMiddleware";
import bodyParser from "body-parser";
// import { json } from "stream/consumers";
import dataSource from "./db/data-source.db";
import employeeRouter from "./routes/employee.routes";
import HttpException from "./exceptions/http.exceptions";
import errorMiddleware from "./middleware/error.middleware";
// import dotenv from "dotenv";

// const { Client } = new Client

const server = express();
server.use(bodyParser.json());
server.use(loggerMiddleware);
server.use("/employees", employeeRouter);

server.use(errorMiddleware);

// server.get("/", (req, res) => {
//   console.log(req.url);
//   res.status(200).send("get empssss");
// });

(async () => {
  try {
    await dataSource.initialize();
  } catch (e) {
    console.log("Failed", e);
    process.exit(1);
  }
  server.listen(3000, () => {
    console.log("server listening to 3000");
  });
})();
