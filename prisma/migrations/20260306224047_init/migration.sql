-- CreateTable
CREATE TABLE "sites" (
    "id" SERIAL NOT NULL,
    "tracking_code" TEXT NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "siteId" INTEGER NOT NULL,
    "sessionId" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_activity" TIMESTAMP(3) NOT NULL,
    "page_views" INTEGER NOT NULL DEFAULT 1,
    "country" TEXT,
    "userAgent" TEXT,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("siteId","sessionId")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "siteId" INTEGER NOT NULL,
    "sessionId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "referrer" TEXT,
    "screen_width" INTEGER NOT NULL,
    "screen_height" INTEGER NOT NULL,
    "country" TEXT,
    "max_scroll" INTEGER NOT NULL,
    "user_agent" TEXT,
    "language" TEXT,
    "utm_source" TEXT,
    "utm_medium" TEXT,
    "utm_term" TEXT,
    "utm_content" TEXT,
    "utm_campaign" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sites_tracking_code_key" ON "sites"("tracking_code");

-- CreateIndex
CREATE INDEX "events_siteId_idx" ON "events"("siteId");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "sites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_siteId_sessionId_fkey" FOREIGN KEY ("siteId", "sessionId") REFERENCES "sessions"("siteId", "sessionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "sites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
