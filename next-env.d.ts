/// <reference types="next" />
/// <reference types="next/types/global" />



declare global {
    interface User {
      id?: number | null | undefined;
    }
  
    module "next-auth" {
      interface Session {
        user: User
      }
    }
  }
  
  /** Example on how to extend the built-in types for JWT */
  declare module "next-auth/jwt" {
    interface JWT {
      /** This is an example. You can find me in types/next-auth.d.ts */
      bar: number
    }
  }
  