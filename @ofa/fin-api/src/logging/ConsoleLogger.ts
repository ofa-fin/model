import type { OFAAppLogger } from "./OFAAppLogger.js";

/**
 * Implements logging using system.console.
 * Only meant for development and debugging.
 */
export class ConsoleLogger implements OFAAppLogger {

  /**
   * Logs a custom event with data using console.log().
   * @param name Name of the event
   * @param properties Additional data for the event.
   */
  public logEvent(name: string, properties: any): void {
    console.log(`EVENT: ${name}`, properties);
  }

  /**
   * Logs an exception using console.error().
   * @param exception Exception to log.
   */
  public logException(exception: any): void {
    console.error(exception)
  }
}