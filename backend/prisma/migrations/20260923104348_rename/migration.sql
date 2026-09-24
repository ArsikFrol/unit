/*
  Warnings:

  - The values [WEBSITE] on the enum `LinkType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LinkType_new" AS ENUM ('GITHUB', 'TELEGRAM', 'VK', 'PORTFOLIO');
ALTER TABLE "links" ALTER COLUMN "type" TYPE "LinkType_new" USING ("type"::text::"LinkType_new");
ALTER TYPE "LinkType" RENAME TO "LinkType_old";
ALTER TYPE "LinkType_new" RENAME TO "LinkType";
DROP TYPE "public"."LinkType_old";
COMMIT;
