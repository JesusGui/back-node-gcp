"use strict";

const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();
const log = require("pino")();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.APP_PORT;

app.get("/healthz", (_, res) => {
  res.status(200).send({ check: "OK" });
});

app.get("/gethelloworld", (_, res) => {
    res.status(200).send({ hello: "Hola primer servicio levantado" });
  });
  
app.listen(PORT, () => {
  log.info(
    `👍 App running at http://localhost:${PORT} with environment: ${process.env.NODE_ENV}`
  );
});