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

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
      alt?: string;
      crossOrigin?: "anonymous" | "use-credentials" | "";
      decoding?: "async" | "auto" | "sync";
      height?: number | string;
      loading?: "eager" | "lazy";
      referrerPolicy?: HTMLAttributeReferrerPolicy;
      sizes?: string;
      src?: string | null;
      srcSet?: string | null;
      useMap?: string;
      width?: number | string;
  }
    
  }
  
  /** Example on how to extend the built-in types for JWT */
  declare module "next-auth/jwt" {
    interface JWT {
      /** This is an example. You can find me in types/next-auth.d.ts */
      bar: number
    }
  }

  