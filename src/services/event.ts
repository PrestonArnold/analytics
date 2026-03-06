import { prisma } from "../db";
import { EventData } from "../types";

export async function createEvent(data: EventData) {
    return prisma.event.create({ data })
}