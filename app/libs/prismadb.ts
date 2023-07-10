import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

// searches for he client or makes the new client
const client = globalThis.prisma || new PrismaClient()

// if not in production, then set it to a new client here
if (process.env.NODE_ENV != 'production') globalThis.prisma = client

export default client;