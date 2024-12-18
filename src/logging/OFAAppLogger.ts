/**
 * Defines the interface for OFA logging methods.
 */
export interface OFAAppLogger {

  /**
   * Logs a custom event with data.
   * @param name Name of the event
   * @param properties Additional data for the event.
   */
  logEvent(name: string, properties: any): void;

  /**
   * Logs an exception.
   * @param exception Exception to log.
   */
  logException(exception: any): void;
}