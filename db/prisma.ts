/* eslint-disable @typescript-eslint/no-explicit-any */
import {neonConfig} from '@neondatabase/serverless';
import {PrismaNeon} from '@prisma/adapter-neon';
import {PrismaClient} from '@prisma/client';
// import {PrismaClient} from '@/lib/generated/prisma';

import ws from 'ws';

// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws;

// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.
const adapter = new PrismaNeon({connectionString: process.env.DATABASE_URL});

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = new PrismaClient({adapter}).$extends({
    result: {
        product: {
            price: {
                compute(product: any) {
                    return product.price.toString();
                },
            },
            rating: {
                compute(product: any) {
                    return product.rating.toString();
                },
            },
        },
    },
});
