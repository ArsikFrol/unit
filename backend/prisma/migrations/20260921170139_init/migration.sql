-- CreateEnum
CREATE TYPE "Status" AS ENUM ('COMPLETED', 'IN_DEVELOPMENT');

-- CreateTable
CREATE TABLE "projects" (
    "project_id" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'IN_DEVELOPMENT',
    "iamge_logo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "startOfDevelopment" TIMESTAMP(3) NOT NULL,
    "endOfDevelopment" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("project_id")
);
