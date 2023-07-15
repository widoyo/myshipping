// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="lucia" />
declare global {
    namespace App {
      // interface Error {}
      // interface Locals {}
      // interface PageData {}
      interface Locals {
        user: {
          name: string
          role: string
        }
      }
      interface Platform {
        env: {
          DB: D1Database;
        };
        context: {
          waitUntil(promise: Promise<any>): void;
        };
        caches: CacheStorage & { default: Cache };
      }
    }

  }
  
  export {};