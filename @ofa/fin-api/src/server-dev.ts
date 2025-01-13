/**
 * DEV-ONLY: API Server setup
 * ==========================
 * 
 * This server is run in local DEV mode only.
 * All other environments are run using server.ts (PROD/TEST/Docker and local preview)
 */

import "dotenv/config";

import express from "express";
import type { Express } from "express";

import { registerConsoleLogging } from "./logging/registerConsoleLogging.js";
import { registerApi } from "./start-up/registerApi.js";

console.log("********************************************")
console.log("* Starting OFA-FIN Model (localhost ONLY)  *")
console.log("********************************************")

registerConsoleLogging();

export const app: Express = express();
registerApi(app, true);
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server started => go to http://localhost:${port}/docs/`);
});