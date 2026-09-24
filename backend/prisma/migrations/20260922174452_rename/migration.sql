/*
  Warnings:

  - You are about to drop the column `bgColor` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `endOfDevelopment` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `iamge_logo` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `startOfDevelopment` on the `projects` table. All the data in the column will be lost.
  - Added the required column `bg_color` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_logo` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_of_development` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "bgColor",
DROP COLUMN "desc",
DROP COLUMN "endOfDevelopment",
DROP COLUMN "iamge_logo",
DROP COLUMN "startOfDevelopment",
ADD COLUMN     "bg_color" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "end_of_development" TIMESTAMP(3),
ADD COLUMN     "image_logo" TEXT NOT NULL,
ADD COLUMN     "start_of_development" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "ProjectTechnology" (
    "project_id" TEXT NOT NULL,
    "technology_id" TEXT NOT NULL,

    CONSTRAINT "ProjectTechnology_pkey" PRIMARY KEY ("project_id","technology_id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "technology_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "icon_url" TEXT,
    "bg_color" TEXT,
    "color_text" TEXT,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("technology_id")
);

-- CreateIndex
CREATE INDEX "ProjectTechnology_technology_id_idx" ON "ProjectTechnology"("technology_id");

-- CreateIndex
CREATE UNIQUE INDEX "Technology_slug_key" ON "Technology"("slug");

-- AddForeignKey
ALTER TABLE "ProjectTechnology" ADD CONSTRAINT "ProjectTechnology_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("project_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTechnology" ADD CONSTRAINT "ProjectTechnology_technology_id_fkey" FOREIGN KEY ("technology_id") REFERENCES "Technology"("technology_id") ON DELETE CASCADE ON UPDATE CASCADE;
