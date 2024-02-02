import { PrismaClient } from "@prisma/client";

declare global {
    namespace NodeJS {
        interface Global {
            db: PrismaClient;
        }
    }
}

global.db = new PrismaClient();