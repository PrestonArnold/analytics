import { prisma } from "../db";

export async function ensureDefaultSite() {
    const defaultCode = process.env.DEFAULT_SITE_CODE || "demo-site";
    const site = await prisma.site.findUnique({
        where: { trackingCode: defaultCode }
    });
    if (!site) {
        await prisma.site.create({
            data: {
                trackingCode: defaultCode,
                name: "Demo Site"
            }
        })
        console.log("Default site created with code ", defaultCode)
    }
}

export async function findSiteByCode(trackingCode: string) {
    return prisma.site.findUnique({ where: { trackingCode } })
}