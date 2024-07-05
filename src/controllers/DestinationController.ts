import { Context } from "hono";
import prisma from "../../prisma/client";

export const getTopDestinations = async (c: Context) => {
    try {
        const topDestinations = await prisma.destination.findMany({orderBy: {id: 'desc'}, take: 3});
        return c.json(topDestinations);
    } catch (e: unknown) {
        console.error(e)
    }
}

export const getAllDestinations = async (c: Context) => {
    try {
        const destinations = await prisma.destination.findMany({orderBy: {id: 'desc'}});
        return c.json(destinations);
    } catch (e: unknown) {
        console.error(e);
    }
}

export const searchDestinations = async (c: Context) => {
    try {
        const body = await c.req.json();

        let searchData  = typeof body['search'] === 'string' ? body['search'] : '';

        const searchDestinations = await prisma.destination.findMany({
            where: {
                name: {
                    search: searchData
                }
            }
        })

        return c.json(searchDestinations);
    } catch (e: unknown) {
        console.error(e);
    }
}