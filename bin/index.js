#! /usr/bin/env node
const createServer = require("../index");
console.log(createServer, "server");
createServer().listen(4000, () => {
  console.log("4000 server runing");
});