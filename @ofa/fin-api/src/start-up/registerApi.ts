import express from "express";
import cors from "cors";
import type { Response as ExResponse, Request as ExRequest, NextFunction, Express } from "express";
import swaggerUi from "swagger-ui-express";
import { json, urlencoded } from "express";
import { ValidateError } from "tsoa";

// The routes is generated by tsoa: Run build if it needs updating.
import { RegisterRoutes } from "../codegen/routes.js";

/**
 * Registers the API routes under `api/v01` and middleware: urlencoded, json and cors as
 * well as the swagger documentation under `/docs`.
 * The function also addes error handling (may be moved to a separate file / function when more complete).
 * @param app The express App to register the routes on.
 * @param addPublic If true, the root folder is served static from `/public`:
 * This contains a little index.html front page that is not necessary when embedded in web site.
 */
export function registerApi(app: Express, addPublic = false): void {
  // Use body parser to read sent json payloads
  app.use(urlencoded({ extended: true, limit: "20mb" }));
  app.use(json({ limit: "20mb" }));
  // TODO: Consider exact cors behavior.
  app.use(cors()); // => allows cors for anyone 
  app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(swaggerUi.generateHTML(undefined, {
      explorer: true,
      swaggerUrls: [{ name: "Main", url: "/api/v1/about/swagger/main" }] as any
    }));
  });
  if (addPublic) {
    app.use(express.static('public'));
  }

  RegisterRoutes(app);

  app.use(function errorHandler(
    err: unknown,
    req: ExRequest,
    res: ExResponse,
    next: NextFunction
  ): ExResponse | void {
    if (err instanceof ValidateError) {
      console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
      const picked = (({ a, c }) => ({ a, c }))(err.fields);
      return res.status(422).json({
        message: "Validation Failed",
        details: Object.entries(err?.fields || {}).map(([field, message]) => `**${field}**: ${message.message}`)
      });
    }
    if (err instanceof Error) {
      console.error(err);
      return res.status(500).json({
        // TODO: Restrict this in production
        message: err.message,
        // message: "Internal Server Error",
      });
    }
    next();
  });
}
