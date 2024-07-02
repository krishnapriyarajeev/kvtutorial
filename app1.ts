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

const express = require("express");

import {Request, Response} from "express";

const serever = new express();

interface Profile{
  name: string,
  age: number
}

interface Data{
  profile: Profile
}


serever.get("/getData", (req: Request, res: Response) => {
  let data1: Data = {
    profile: {
      name: "Ashish",
      age: 31,
    },
  };
  // data1 = "string data";
  console.log(data1.profile.name);
  res.status(200).send(data1);
  //   console.log("Hello I'm KP")
});

serever.listen(3005, () => {
  console.log("Server is running on port 3004");
});
