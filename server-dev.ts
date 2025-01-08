/**
 * DEV-ONLY: API Server setup
 * ==========================
 * 
 * This server is run in local DEV mode only.
 * All other environments are run using server.ts (PROD/TEST/Docker and local preview)
 */

import "dotenv/config";

import type { Express } from "express";
import express from "express";
import * as fs from "fs";
import * as path from "path";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";

import { registerConsoleLogging } from "./src/logging/registerConsoleLogging.js";

console.log("********************************************")
console.log("* Starting OFA-FIN Model (localhost ONLY)  *")
console.log("********************************************")

registerConsoleLogging();

export const app: Express = express();
const port = process.env.PORT || 3003;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openApiDocument = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "tsp-output/@typespec/openapi3/openapi.json"), "utf-8")
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

app.get("/", (req, res) => {
  res.send("API is running! Go to /api-docs to see the documentation.");
});

app.listen(port, () => {
  console.log(`Server started => go to http://localhost:${port}/api-docs/`);
});