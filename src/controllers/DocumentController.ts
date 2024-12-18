import {
  Controller,
  Get,
  Route,
  Tags
} from "tsoa";
import { Document } from "../model/Document.js";

/**
 * Management API for documents.
 * NO SECURITY / DEV / ANON / LOCALHOST ONLY!
 */
@Route("api/v01/document")
@Tags("Document")
export class DocumentController extends Controller {

  constructor() {
    super();
  }

  /**
   * Gets a document from storage based on its id.
   * @param id Unique identifier for the document.
   * @returns The document if found.
   */
  @Get("{id}")
  public findById(id: string): Document {
    return {} as any;
  }

}