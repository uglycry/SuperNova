import express from "express";
import http from "node:http";
import { createBareServer } from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
dotenv.config();

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/geometry/");

app.use(express.json());
app.use(  
  express.urlencoded({
    extended: true,
  })
);

// Routes 

app.use(express.static(path.join(__dirname, "static")));

  //cloaks

  app.get("/table", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "cloaks", "howtobelogical.html"));
  });

  app.get("/vocab", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "cloaks", "vocabulary.html"));
  });

  app.get("/math", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "cloaks", "mathisfun.html"));
  });

  //cloaks end

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "index.html"));
  });

  app.get("/mathematics", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "mathematics.html"));
  });

  app.get("/socialstudys", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "socialstudys.html"));
  });

  app.get("/algebra", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "algebra.html"));
  });

  app.get("/settings", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "settings.html"));
  });

  app.get("/go", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "go.html"));
  });

  app.get("/404", (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "404.html"));
  });

  app.get("/*", (req, res) => {
    res.redirect("/404");
  });

// Bare Server 
server.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.on("listening", () => {
  console.log(`SuperNova running at http://localhost:${process.env.PORT}`);
});

server.listen({
  port: process.env.PORT,
});
