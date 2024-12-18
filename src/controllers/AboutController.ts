import express from "express";
import {
  Controller,
  Get,
  Route,
  Tags,
} from "tsoa";

import swaggerFile from '../codegen/swagger.json' assert { type: "json" };

/**
 * General information and metadata about the API.
 */
@Route("api/v01/about")
@Tags("About")
export class AboutController extends Controller {

  constructor() {
    super();
  }

  @Get("hello/{name}")
  public hello(name?: string): any {
    return "Hello " + name;
  }

  /**
   * Gets the main Open API specification for the API.
   * @returns The the definition of the API as an Open API definition (swagger).
   */
  @Get("swagger/main")
  public swagger(): any {
    return swaggerFile;
  }

}