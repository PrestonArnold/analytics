import { Request, Response } from "express";
import { findSiteByCode } from "../services/site";
import { upsertSesh } from "../services/session";
import { createEvent } from "../services/event";

export async function trackHandler(req: Request, res: Response) {
    try {
        const {
            site_code,
            url,
            referrer,
            screen_width,
            screen_height,
            max_scroll,
            session_id,
            user_agent,
            language,
            utm_source,
            utm_medium,
            utm_campaign,
            utm_term,
            utm_content
        } = req.body;

        if (!site_code) {
            return res.status(400).json({ error: "site_code IS REQUIRED!" })
        }

        const site = await findSiteByCode(site_code);
        if (!site) {
            return res.status(404).json({ error: "SITE NOT FOUND" })
        }

        const country = (req.headers['cf-ipcountry'] as string) || 'unknown'; // ofc very simple rn, only works if the site is using cloudflare.

        await upsertSesh(site.id, session_id, country, user_agent);

        await createEvent({
            siteId: site.id,
            sessionId: session_id,
            url,
            referrer,
            screenWidth: screen_width,
            screenHeight: screen_height,
            country,
            maxScroll: max_scroll,
            userAgent: user_agent,
            language,
            utmSource: utm_source,
            utmMedium: utm_medium,
            utmCampaign: utm_campaign,
            utmTerm: utm_term,
            utmContent: utm_content
        })

        res.status(200).json({ success: true })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "INTERNAL ERROR" })
    }
}