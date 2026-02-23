/**
 * Minions Test-targets SDK
 *
 * Agent-under-test definitions, endpoints, capabilities, and auth configs
 *
 * @module @minions-test-targets/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Test-targets.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
