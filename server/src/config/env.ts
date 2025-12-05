import "dotenv/config.js";

export type Env = {
    PORT: number;
    NODE_ENV: 'development' | 'production' | 'test';
    MONGO_URI: string;
}

export function loadEnv(): Env {
    const PORT = Number(process.env.PORT ?? 3000);
    const NODE_ENV = (process.env.NODE_ENV ?? 'development') as Env['NODE_ENV'];
    const MONGO_URI = (process.env.MONGO_URI ?? '');

    const missing = Object.entries({ MONGO_URI })
        .filter(([, v]) => !v)
        .map(([k]) => k);
    if (missing.length) {
        throw new Error(`Missing env vars: ${missing.join(', ')}`);
    }

    return { PORT, NODE_ENV, MONGO_URI };

}