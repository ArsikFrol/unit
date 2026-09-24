-- CreateEnum
CREATE TYPE "LinkType" AS ENUM ('GITHUB', 'TELEGRAM', 'VK', 'WEBSITE');

-- CreateTable
CREATE TABLE "creators" (
    "creator_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "role" TEXT,
    "bio" TEXT,
    "avatar_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "creators_pkey" PRIMARY KEY ("creator_id")
);

-- CreateTable
CREATE TABLE "links" (
    "link_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "LinkType" NOT NULL,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("link_id")
);

-- CreateTable
CREATE TABLE "ProjectCreator" (
    "project_id" TEXT NOT NULL,
    "creator_id" TEXT NOT NULL,

    CONSTRAINT "ProjectCreator_pkey" PRIMARY KEY ("project_id","creator_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "creators_slug_key" ON "creators"("slug");

-- CreateIndex
CREATE INDEX "ProjectCreator_creator_id_idx" ON "ProjectCreator"("creator_id");

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "creators"("creator_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectCreator" ADD CONSTRAINT "ProjectCreator_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("project_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectCreator" ADD CONSTRAINT "ProjectCreator_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "creators"("creator_id") ON DELETE CASCADE ON UPDATE CASCADE;
