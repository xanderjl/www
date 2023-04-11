declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    VERCEL_ENV: 'production' | 'preview' | 'development'
    VERCEL_URL: string
    NEXT_PUBLIC_VERCEL_URL: string
  }
}
