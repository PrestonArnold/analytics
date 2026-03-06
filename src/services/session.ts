import { prisma } from "../db";

export async function upsertSesh(
    siteId: number,
    sessionId: string,
    country: string,
    userAgent?: string
) {
    return prisma.session.upsert({
        where: {
            siteId_sessionId: {
                siteId,
                sessionId
            }
        },
        update: {
            lastActivity: new Date(),
            pageViews: { increment: 1 }
        },
        create: {
            siteId,
            sessionId,
            startTime: new Date(),
            lastActivity: new Date(),
            pageViews: 1,
            country,
            userAgent
        }
    })
}