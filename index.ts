/**
 * @file index.ts
 * @description Main entry point for the Umami Astro component package.
 * This file exports the Umami component and its related types.
 */

// Export the Umami component
export { default as Umami } from "./src/Umami.astro";

// Export types
export type { Props as UmamiProps } from "./src/Umami.astro";
export type { Umami as UmamiInterface } from "./types/index";
