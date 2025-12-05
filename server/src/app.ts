import {loadEnv} from "./config/env";

const env = loadEnv();

console.log(`PORT = ${env.PORT}`);