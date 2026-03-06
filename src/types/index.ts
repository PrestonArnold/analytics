export interface EventData {
    siteId: number;
    sessionId: string;
    url: string;
    referrer?: string;
    screenWidth: number;
    screenHeight: number;
    country?: string;
    maxScroll: number;
    userAgent?: string;
    language?: string;
    utmSource?: string | null;
    utmMedium?: string | null;
    utmCampaign?: string | null;
    utmTerm?: string | null;
    utmContent?: string | null;
}