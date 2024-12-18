import { ConsoleLogger } from "./ConsoleLogger.js";

/**
 * Registers the console based Logging provider (DEV ONLY).
 * This function should be called at the start of the application.
 */
export function registerConsoleLogging() {
  (globalThis as any).logger = new ConsoleLogger();
}