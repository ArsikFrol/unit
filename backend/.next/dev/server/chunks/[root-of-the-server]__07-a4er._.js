module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[project]/src/app/api/projects/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function OPTIONS() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 204,
        headers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CORS_HEADERS"]
    });
}
async function GET(req) {
    try {
        const listProjects = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].project.findMany({
            select: {
                projectId: true,
                status: true,
                title: true,
                description: true,
                imageLogo: true,
                bgColor: true,
                link: true,
                endOfDevelopment: true,
                startOfDevelopment: true,
                technologies: {
                    select: {
                        technology: {
                            select: {
                                bgColor: true,
                                colorText: true,
                                iconUrl: true,
                                name: true
                            }
                        }
                    }
                },
                creators: {
                    select: {
                        creator: {
                            select: {
                                avatarUrl: true,
                                name: true,
                                slug: true,
                                bgColor: true,
                                colorText: true,
                                role: true
                            }
                        }
                    }
                }
            }
        });
        const result = listProjects.map(({ creators, technologies, ...profject })=>({
                ...profject,
                technologies: technologies.map((t)=>t.technology),
                creators: creators.map((c)=>c.creator)
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CORS_HEADERS"]
        });
    } catch (error) {
        console.error('Ошибка:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Внутренняя ошибка сервера'
        }, {
            status: 500,
            headers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CORS_HEADERS"]
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/generated/prisma/client.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 * If you're looking for something you can import in the client-side of your application, please refer to the `browser.ts` file instead.
 *
 * 🟢 You can import this file directly.
 */ __turbopack_context__.s([
    "PrismaClient",
    ()=>PrismaClient
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/internal/class.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$prismaNamespace$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/internal/prismaNamespace.ts [app-route] (ecmascript)");
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("src/generated/prisma/client.ts");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: true
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
globalThis['__dirname'] = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["dirname"]((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url));
;
;
;
;
const PrismaClient = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPrismaClientClass"]();
;
}),
"[project]/src/generated/prisma/internal/class.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrismaClientClass",
    ()=>getPrismaClientClass
]);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * Please import the `PrismaClient` class from the `client.ts` file instead.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client/runtime/client [external] (@prisma/client/runtime/client, cjs, [project]/node_modules/@prisma/client)");
;
const config = {
    "previewFeatures": [],
    "clientVersion": "7.8.0",
    "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
    "activeProvider": "postgresql",
    "inlineSchema": "model Creator {\n  creatorId String @id @default(cuid()) @map(\"creator_id\")\n\n  name      String\n  slug      String  @unique\n  role      String?\n  bio       String?\n  avatarUrl String? @map(\"avatar_url\")\n\n  bgColor   String? @map(\"bg_color\")\n  colorText String? @map(\"color_text\")\n\n  projectCreators ProjectCreator[]\n  links           Link[]\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"creators\")\n}\n\nenum LinkType {\n  GITHUB\n  TELEGRAM\n  VK\n  PORTFOLIO\n}\n\nmodel Link {\n  linkId String @id @default(cuid()) @map(\"link_id\")\n\n  url   String\n  type  LinkType\n  order Int      @default(0)\n\n  creatorId String  @map(\"creator_id\")\n  creator   Creator @relation(fields: [creatorId], references: [creatorId], onDelete: Cascade)\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"links\")\n}\n\nenum Status {\n  COMPLETED\n  IN_DEVELOPMENT\n}\n\nmodel Project {\n  projectId String @id @default(cuid()) @map(\"project_id\")\n\n  status      Status @default(IN_DEVELOPMENT)\n  imageLogo   String @map(\"image_logo\")\n  title       String\n  description String\n\n  link    String\n  bgColor String @map(\"bg_color\")\n\n  startOfDevelopment DateTime  @map(\"start_of_development\")\n  endOfDevelopment   DateTime? @map(\"end_of_development\")\n\n  technologies ProjectTechnology[]\n  creators     ProjectCreator[]\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"projects\")\n}\n\nmodel ProjectTechnology {\n  projectId String  @map(\"project_id\")\n  project   Project @relation(fields: [projectId], references: [projectId], onDelete: Cascade)\n\n  technologyId String     @map(\"technology_id\")\n  technology   Technology @relation(fields: [technologyId], references: [technologyId], onDelete: Cascade)\n\n  @@id([projectId, technologyId])\n  @@index([technologyId])\n}\n\nmodel ProjectCreator {\n  projectId String  @map(\"project_id\")\n  project   Project @relation(fields: [projectId], references: [projectId], onDelete: Cascade)\n\n  creatorId String  @map(\"creator_id\")\n  creator   Creator @relation(fields: [creatorId], references: [creatorId], onDelete: Cascade)\n\n  @@id([projectId, creatorId])\n  @@index([creatorId])\n}\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Technology {\n  technologyId String  @id @default(cuid()) @map(\"technology_id\")\n  name         String\n  slug         String  @unique\n  iconUrl      String? @map(\"icon_url\")\n  bgColor      String? @map(\"bg_color\")\n  colorText    String? @map(\"color_text\")\n\n  projects ProjectTechnology[]\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Creator\":{\"fields\":[{\"name\":\"creatorId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"creator_id\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bio\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"avatarUrl\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"avatar_url\"},{\"name\":\"bgColor\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"bg_color\"},{\"name\":\"colorText\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"color_text\"},{\"name\":\"projectCreators\",\"kind\":\"object\",\"type\":\"ProjectCreator\",\"relationName\":\"CreatorToProjectCreator\"},{\"name\":\"links\",\"kind\":\"object\",\"type\":\"Link\",\"relationName\":\"CreatorToLink\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"creators\"},\"Link\":{\"fields\":[{\"name\":\"linkId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"link_id\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"LinkType\"},{\"name\":\"order\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"creator_id\"},{\"name\":\"creator\",\"kind\":\"object\",\"type\":\"Creator\",\"relationName\":\"CreatorToLink\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"links\"},\"Project\":{\"fields\":[{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Status\"},{\"name\":\"imageLogo\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"image_logo\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"link\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bgColor\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"bg_color\"},{\"name\":\"startOfDevelopment\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"start_of_development\"},{\"name\":\"endOfDevelopment\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"end_of_development\"},{\"name\":\"technologies\",\"kind\":\"object\",\"type\":\"ProjectTechnology\",\"relationName\":\"ProjectToProjectTechnology\"},{\"name\":\"creators\",\"kind\":\"object\",\"type\":\"ProjectCreator\",\"relationName\":\"ProjectToProjectCreator\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"projects\"},\"ProjectTechnology\":{\"fields\":[{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToProjectTechnology\"},{\"name\":\"technologyId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"technology_id\"},{\"name\":\"technology\",\"kind\":\"object\",\"type\":\"Technology\",\"relationName\":\"ProjectTechnologyToTechnology\"}],\"dbName\":null},\"ProjectCreator\":{\"fields\":[{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToProjectCreator\"},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"creator_id\"},{\"name\":\"creator\",\"kind\":\"object\",\"type\":\"Creator\",\"relationName\":\"CreatorToProjectCreator\"}],\"dbName\":null},\"Technology\":{\"fields\":[{\"name\":\"technologyId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"technology_id\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"iconUrl\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"icon_url\"},{\"name\":\"bgColor\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"bg_color\"},{\"name\":\"colorText\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"color_text\"},{\"name\":\"projects\",\"kind\":\"object\",\"type\":\"ProjectTechnology\",\"relationName\":\"ProjectTechnologyToTechnology\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"project\",\"projects\",\"_count\",\"technology\",\"technologies\",\"creators\",\"creator\",\"projectCreators\",\"links\",\"Creator.findUnique\",\"Creator.findUniqueOrThrow\",\"Creator.findFirst\",\"Creator.findFirstOrThrow\",\"Creator.findMany\",\"data\",\"Creator.createOne\",\"Creator.createMany\",\"Creator.createManyAndReturn\",\"Creator.updateOne\",\"Creator.updateMany\",\"Creator.updateManyAndReturn\",\"create\",\"update\",\"Creator.upsertOne\",\"Creator.deleteOne\",\"Creator.deleteMany\",\"having\",\"_min\",\"_max\",\"Creator.groupBy\",\"Creator.aggregate\",\"Link.findUnique\",\"Link.findUniqueOrThrow\",\"Link.findFirst\",\"Link.findFirstOrThrow\",\"Link.findMany\",\"Link.createOne\",\"Link.createMany\",\"Link.createManyAndReturn\",\"Link.updateOne\",\"Link.updateMany\",\"Link.updateManyAndReturn\",\"Link.upsertOne\",\"Link.deleteOne\",\"Link.deleteMany\",\"_avg\",\"_sum\",\"Link.groupBy\",\"Link.aggregate\",\"Project.findUnique\",\"Project.findUniqueOrThrow\",\"Project.findFirst\",\"Project.findFirstOrThrow\",\"Project.findMany\",\"Project.createOne\",\"Project.createMany\",\"Project.createManyAndReturn\",\"Project.updateOne\",\"Project.updateMany\",\"Project.updateManyAndReturn\",\"Project.upsertOne\",\"Project.deleteOne\",\"Project.deleteMany\",\"Project.groupBy\",\"Project.aggregate\",\"ProjectTechnology.findUnique\",\"ProjectTechnology.findUniqueOrThrow\",\"ProjectTechnology.findFirst\",\"ProjectTechnology.findFirstOrThrow\",\"ProjectTechnology.findMany\",\"ProjectTechnology.createOne\",\"ProjectTechnology.createMany\",\"ProjectTechnology.createManyAndReturn\",\"ProjectTechnology.updateOne\",\"ProjectTechnology.updateMany\",\"ProjectTechnology.updateManyAndReturn\",\"ProjectTechnology.upsertOne\",\"ProjectTechnology.deleteOne\",\"ProjectTechnology.deleteMany\",\"ProjectTechnology.groupBy\",\"ProjectTechnology.aggregate\",\"ProjectCreator.findUnique\",\"ProjectCreator.findUniqueOrThrow\",\"ProjectCreator.findFirst\",\"ProjectCreator.findFirstOrThrow\",\"ProjectCreator.findMany\",\"ProjectCreator.createOne\",\"ProjectCreator.createMany\",\"ProjectCreator.createManyAndReturn\",\"ProjectCreator.updateOne\",\"ProjectCreator.updateMany\",\"ProjectCreator.updateManyAndReturn\",\"ProjectCreator.upsertOne\",\"ProjectCreator.deleteOne\",\"ProjectCreator.deleteMany\",\"ProjectCreator.groupBy\",\"ProjectCreator.aggregate\",\"Technology.findUnique\",\"Technology.findUniqueOrThrow\",\"Technology.findFirst\",\"Technology.findFirstOrThrow\",\"Technology.findMany\",\"Technology.createOne\",\"Technology.createMany\",\"Technology.createManyAndReturn\",\"Technology.updateOne\",\"Technology.updateMany\",\"Technology.updateManyAndReturn\",\"Technology.upsertOne\",\"Technology.deleteOne\",\"Technology.deleteMany\",\"Technology.groupBy\",\"Technology.aggregate\",\"AND\",\"OR\",\"NOT\",\"technologyId\",\"name\",\"slug\",\"iconUrl\",\"bgColor\",\"colorText\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"not\",\"every\",\"some\",\"none\",\"projectId\",\"creatorId\",\"Status\",\"status\",\"imageLogo\",\"title\",\"description\",\"link\",\"startOfDevelopment\",\"endOfDevelopment\",\"createdAt\",\"updatedAt\",\"linkId\",\"url\",\"LinkType\",\"type\",\"order\",\"role\",\"bio\",\"avatarUrl\",\"projectId_technologyId\",\"projectId_creatorId\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "3AI2YA8KAAC-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_AQAwdQAAQAAQdgAAvwEAMIwBAQCiAQAhlQFAALIBACGWAUAAsgEAIZcBAQCiAQAhmAEBAKIBACGaAQAAwAGaASKbAQIAwQEAIQMAAAAQACABAAA_ADAdAABAACADAAAAEAAgAQAAEQAwAgAAEgAgEAcAAK0BACAIAAC-AQAgdAAAugEAMHUAAEYAEHYAALoBADB7AQCrAQAhiwEBAAAAAY4BAAC7AY4BIo8BAQCrAQAhkAEBAKsBACGRAQEAqwEAIZIBAQCrAQAhkwFAALwBACGUAUAAvQEAIZUBQAC8AQAhlgFAALwBACEBAAAAQwAgAQAAAEMAIBAHAACtAQAgCAAAvgEAIHQAALoBADB1AABGABB2AAC6AQAwewEAqwEAIYsBAQCrAQAhjgEAALsBjgEijwEBAKsBACGQAQEAqwEAIZEBAQCrAQAhkgEBAKsBACGTAUAAvAEAIZQBQAC9AQAhlQFAALwBACGWAUAAvAEAIQMHAADpAQAgCAAAlQIAIJQBAADTAQAgAwAAAEYAIAEAAEcAMAIAAEMAIAMAAABGACABAABHADACAABDACADAAAARgAgAQAARwAwAgAAQwAgDQcAAJMCACAIAACUAgAgewEAAAABiwEBAAAAAY4BAAAAjgECjwEBAAAAAZABAQAAAAGRAQEAAAABkgEBAAAAAZMBQAAAAAGUAUAAAAABlQFAAAAAAZYBQAAAAAEBEQAASwAgC3sBAAAAAYsBAQAAAAGOAQAAAI4BAo8BAQAAAAGQAQEAAAABkQEBAAAAAZIBAQAAAAGTAUAAAAABlAFAAAAAAZUBQAAAAAGWAUAAAAABAREAAE0AMAERAABNADANBwAA_AEAIAgAAP0BACB7AQDXAQAhiwEBANcBACGOAQAA-QGOASKPAQEA1wEAIZABAQDXAQAhkQEBANcBACGSAQEA1wEAIZMBQAD6AQAhlAFAAPsBACGVAUAA-gEAIZYBQAD6AQAhAgAAAEMAIBEAAFAAIAt7AQDXAQAhiwEBANcBACGOAQAA-QGOASKPAQEA1wEAIZABAQDXAQAhkQEBANcBACGSAQEA1wEAIZMBQAD6AQAhlAFAAPsBACGVAUAA-gEAIZYBQAD6AQAhAgAAAEYAIBEAAFIAIAIAAABGACARAABSACADAAAAQwAgGAAASwAgGQAAUAAgAQAAAEMAIAEAAABGACAEBQAA9gEAIB4AAPgBACAfAAD3AQAglAEAANMBACAOdAAAsAEAMHUAAFkAEHYAALABADB7AQCiAQAhiwEBAKIBACGOAQAAsQGOASKPAQEAogEAIZABAQCiAQAhkQEBAKIBACGSAQEAogEAIZMBQACyAQAhlAFAALMBACGVAUAAsgEAIZYBQACyAQAhAwAAAEYAIAEAAFgAMB0AAFkAIAMAAABGACABAABHADACAABDACABAAAACQAgAQAAAAkAIAMAAAAHACABAAAIADACAAAJACADAAAABwAgAQAACAAwAgAACQAgAwAAAAcAIAEAAAgAMAIAAAkAIAQDAADnAQAgBgAA9QEAIHcBAAAAAYsBAQAAAAEBEQAAYQAgAncBAAAAAYsBAQAAAAEBEQAAYwAwAREAAGMAMAQDAADlAQAgBgAA9AEAIHcBANcBACGLAQEA1wEAIQIAAAAJACARAABmACACdwEA1wEAIYsBAQDXAQAhAgAAAAcAIBEAAGgAIAIAAAAHACARAABoACADAAAACQAgGAAAYQAgGQAAZgAgAQAAAAkAIAEAAAAHACADBQAA8QEAIB4AAPMBACAfAADyAQAgBXQAAK8BADB1AABvABB2AACvAQAwdwEAogEAIYsBAQCiAQAhAwAAAAcAIAEAAG4AMB0AAG8AIAMAAAAHACABAAAIADACAAAJACABAAAABQAgAQAAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAQDAADvAQAgCQAA8AEAIIsBAQAAAAGMAQEAAAABAREAAHcAIAKLAQEAAAABjAEBAAAAAQERAAB5ADABEQAAeQAwBAMAAO0BACAJAADuAQAgiwEBANcBACGMAQEA1wEAIQIAAAAFACARAAB8ACACiwEBANcBACGMAQEA1wEAIQIAAAADACARAAB-ACACAAAAAwAgEQAAfgAgAwAAAAUAIBgAAHcAIBkAAHwAIAEAAAAFACABAAAAAwAgAwUAAOoBACAeAADsAQAgHwAA6wEAIAV0AACuAQAwdQAAhQEAEHYAAK4BADCLAQEAogEAIYwBAQCiAQAhAwAAAAMAIAEAAIQBADAdAACFAQAgAwAAAAMAIAEAAAQAMAIAAAUAIAoEAACtAQAgdAAAqgEAMHUAAIsBABB2AACqAQAwdwEAAAABeAEAqwEAIXkBAAAAAXoBAKwBACF7AQCsAQAhfAEArAEAIQEAAACIAQAgAQAAAIgBACAKBAAArQEAIHQAAKoBADB1AACLAQAQdgAAqgEAMHcBAKsBACF4AQCrAQAheQEAqwEAIXoBAKwBACF7AQCsAQAhfAEArAEAIQQEAADpAQAgegAA0wEAIHsAANMBACB8AADTAQAgAwAAAIsBACABAACMAQAwAgAAiAEAIAMAAACLAQAgAQAAjAEAMAIAAIgBACADAAAAiwEAIAEAAIwBADACAACIAQAgBwQAAOgBACB3AQAAAAF4AQAAAAF5AQAAAAF6AQAAAAF7AQAAAAF8AQAAAAEBEQAAkAEAIAZ3AQAAAAF4AQAAAAF5AQAAAAF6AQAAAAF7AQAAAAF8AQAAAAEBEQAAkgEAMAERAACSAQAwBwQAANkBACB3AQDXAQAheAEA1wEAIXkBANcBACF6AQDYAQAhewEA2AEAIXwBANgBACECAAAAiAEAIBEAAJUBACAGdwEA1wEAIXgBANcBACF5AQDXAQAhegEA2AEAIXsBANgBACF8AQDYAQAhAgAAAIsBACARAACXAQAgAgAAAIsBACARAACXAQAgAwAAAIgBACAYAACQAQAgGQAAlQEAIAEAAACIAQAgAQAAAIsBACAGBQAA1AEAIB4AANYBACAfAADVAQAgegAA0wEAIHsAANMBACB8AADTAQAgCXQAAKEBADB1AACeAQAQdgAAoQEAMHcBAKIBACF4AQCiAQAheQEAogEAIXoBAKMBACF7AQCjAQAhfAEAowEAIQMAAACLAQAgAQAAnQEAMB0AAJ4BACADAAAAiwEAIAEAAIwBADACAACIAQAgCXQAAKEBADB1AACeAQAQdgAAoQEAMHcBAKIBACF4AQCiAQAheQEAogEAIXoBAKMBACF7AQCjAQAhfAEAowEAIQ4FAACoAQAgHgAAqQEAIB8AAKkBACB9AQAAAAF-AQAAAAR_AQAAAASAAQEAAAABgQEBAAAAAYIBAQAAAAGDAQEAAAABhAEBAAAAAYUBAQAAAAGGAQEAAAABhwEBAKcBACEOBQAApQEAIB4AAKYBACAfAACmAQAgfQEAAAABfgEAAAAFfwEAAAAFgAEBAAAAAYEBAQAAAAGCAQEAAAABgwEBAAAAAYQBAQAAAAGFAQEAAAABhgEBAAAAAYcBAQCkAQAhDgUAAKUBACAeAACmAQAgHwAApgEAIH0BAAAAAX4BAAAABX8BAAAABYABAQAAAAGBAQEAAAABggEBAAAAAYMBAQAAAAGEAQEAAAABhQEBAAAAAYYBAQAAAAGHAQEApAEAIQh9AgAAAAF-AgAAAAV_AgAAAAWAAQIAAAABgQECAAAAAYIBAgAAAAGDAQIAAAABhwECAKUBACELfQEAAAABfgEAAAAFfwEAAAAFgAEBAAAAAYEBAQAAAAGCAQEAAAABgwEBAAAAAYQBAQAAAAGFAQEAAAABhgEBAAAAAYcBAQCmAQAhDgUAAKgBACAeAACpAQAgHwAAqQEAIH0BAAAAAX4BAAAABH8BAAAABIABAQAAAAGBAQEAAAABggEBAAAAAYMBAQAAAAGEAQEAAAABhQEBAAAAAYYBAQAAAAGHAQEApwEAIQh9AgAAAAF-AgAAAAR_AgAAAASAAQIAAAABgQECAAAAAYIBAgAAAAGDAQIAAAABhwECAKgBACELfQEAAAABfgEAAAAEfwEAAAAEgAEBAAAAAYEBAQAAAAGCAQEAAAABgwEBAAAAAYQBAQAAAAGFAQEAAAABhgEBAAAAAYcBAQCpAQAhCgQAAK0BACB0AACqAQAwdQAAiwEAEHYAAKoBADB3AQCrAQAheAEAqwEAIXkBAKsBACF6AQCsAQAhewEArAEAIXwBAKwBACELfQEAAAABfgEAAAAEfwEAAAAEgAEBAAAAAYEBAQAAAAGCAQEAAAABgwEBAAAAAYQBAQAAAAGFAQEAAAABhgEBAAAAAYcBAQCpAQAhC30BAAAAAX4BAAAABX8BAAAABYABAQAAAAGBAQEAAAABggEBAAAAAYMBAQAAAAGEAQEAAAABhQEBAAAAAYYBAQAAAAGHAQEApgEAIQOIAQAABwAgiQEAAAcAIIoBAAAHACAFdAAArgEAMHUAAIUBABB2AACuAQAwiwEBAKIBACGMAQEAogEAIQV0AACvAQAwdQAAbwAQdgAArwEAMHcBAKIBACGLAQEAogEAIQ50AACwAQAwdQAAWQAQdgAAsAEAMHsBAKIBACGLAQEAogEAIY4BAACxAY4BIo8BAQCiAQAhkAEBAKIBACGRAQEAogEAIZIBAQCiAQAhkwFAALIBACGUAUAAswEAIZUBQACyAQAhlgFAALIBACEHBQAAqAEAIB4AALkBACAfAAC5AQAgfQAAAI4BAn4AAACOAQh_AAAAjgEIhwEAALgBjgEiCwUAAKgBACAeAAC3AQAgHwAAtwEAIH1AAAAAAX5AAAAABH9AAAAABIABQAAAAAGBAUAAAAABggFAAAAAAYMBQAAAAAGHAUAAtgEAIQsFAAClAQAgHgAAtQEAIB8AALUBACB9QAAAAAF-QAAAAAV_QAAAAAWAAUAAAAABgQFAAAAAAYIBQAAAAAGDAUAAAAABhwFAALQBACELBQAApQEAIB4AALUBACAfAAC1AQAgfUAAAAABfkAAAAAFf0AAAAAFgAFAAAAAAYEBQAAAAAGCAUAAAAABgwFAAAAAAYcBQAC0AQAhCH1AAAAAAX5AAAAABX9AAAAABYABQAAAAAGBAUAAAAABggFAAAAAAYMBQAAAAAGHAUAAtQEAIQsFAACoAQAgHgAAtwEAIB8AALcBACB9QAAAAAF-QAAAAAR_QAAAAASAAUAAAAABgQFAAAAAAYIBQAAAAAGDAUAAAAABhwFAALYBACEIfUAAAAABfkAAAAAEf0AAAAAEgAFAAAAAAYEBQAAAAAGCAUAAAAABgwFAAAAAAYcBQAC3AQAhBwUAAKgBACAeAAC5AQAgHwAAuQEAIH0AAACOAQJ-AAAAjgEIfwAAAI4BCIcBAAC4AY4BIgR9AAAAjgECfgAAAI4BCH8AAACOAQiHAQAAuQGOASIQBwAArQEAIAgAAL4BACB0AAC6AQAwdQAARgAQdgAAugEAMHsBAKsBACGLAQEAqwEAIY4BAAC7AY4BIo8BAQCrAQAhkAEBAKsBACGRAQEAqwEAIZIBAQCrAQAhkwFAALwBACGUAUAAvQEAIZUBQAC8AQAhlgFAALwBACEEfQAAAI4BAn4AAACOAQh_AAAAjgEIhwEAALkBjgEiCH1AAAAAAX5AAAAABH9AAAAABIABQAAAAAGBAUAAAAABggFAAAAAAYMBQAAAAAGHAUAAtwEAIQh9QAAAAAF-QAAAAAV_QAAAAAWAAUAAAAABgQFAAAAAAYIBQAAAAAGDAUAAAAABhwFAALUBACEDiAEAAAMAIIkBAAADACCKAQAAAwAgCnQAAL8BADB1AABAABB2AAC_AQAwjAEBAKIBACGVAUAAsgEAIZYBQACyAQAhlwEBAKIBACGYAQEAogEAIZoBAADAAZoBIpsBAgDBAQAhBwUAAKgBACAeAADFAQAgHwAAxQEAIH0AAACaAQJ-AAAAmgEIfwAAAJoBCIcBAADEAZoBIg0FAACoAQAgHgAAqAEAIB8AAKgBACAwAADDAQAgMQAAqAEAIH0CAAAAAX4CAAAABH8CAAAABIABAgAAAAGBAQIAAAABggECAAAAAYMBAgAAAAGHAQIAwgEAIQ0FAACoAQAgHgAAqAEAIB8AAKgBACAwAADDAQAgMQAAqAEAIH0CAAAAAX4CAAAABH8CAAAABIABAgAAAAGBAQIAAAABggECAAAAAYMBAgAAAAGHAQIAwgEAIQh9CAAAAAF-CAAAAAR_CAAAAASAAQgAAAABgQEIAAAAAYIBCAAAAAGDAQgAAAABhwEIAMMBACEHBQAAqAEAIB4AAMUBACAfAADFAQAgfQAAAJoBAn4AAACaAQh_AAAAmgEIhwEAAMQBmgEiBH0AAACaAQJ-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AIgBACADGAAAyAIAIKMBAADJAgAgqQEAAIgBACAAAAABpgEAAACOAQIBpgFAAAAAAQGmAUAAAAABCxgAAIoCADAZAACOAgAwowEAAIsCADCkAQAAjAIAMKUBAACNAgAgpgEAAN4BADCnAQAA3gEAMKgBAADeAQAwqQEAAN4BADCqAQAAjwIAMKsBAADhAQAwCxgAAP4BADAZAACDAgAwowEAAP8BADCkAQAAgAIAMKUBAACBAgAgpgEAAIICADCnAQAAggIAMKgBAACCAgAwqQEAAIICADCqAQAAhAIAMKsBAACFAgAwAgkAAPABACCMAQEAAAABAgAAAAUAIBgAAIkCACADAAAABQAgGAAAiQIAIBkAAIgCACABEQAAxwIAMAgDAADPAQAgCQAAzAEAIHQAANIBADB1AAADABB2AADSAQAwiwEBAKsBACGMAQEAqwEAIaABAADRAQAgAgAAAAUAIBEAAIgCACACAAAAhgIAIBEAAIcCACAFdAAAhQIAMHUAAIYCABB2AACFAgAwiwEBAKsBACGMAQEAqwEAIQV0AACFAgAwdQAAhgIAEHYAAIUCADCLAQEAqwEAIYwBAQCrAQAhAYwBAQDXAQAhAgkAAO4BACCMAQEA1wEAIQIJAADwAQAgjAEBAAAAAQIGAAD1AQAgdwEAAAABAgAAAAkAIBgAAJICACADAAAACQAgGAAAkgIAIBkAAJECACABEQAAxgIAMAIAAAAJACARAACRAgAgAgAAAOIBACARAACQAgAgAXcBANcBACECBgAA9AEAIHcBANcBACECBgAA9QEAIHcBAAAAAQQYAACKAgAwowEAAIsCADClAQAAjQIAIKkBAADeAQAwBBgAAP4BADCjAQAA_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-gEAIZQBQAD7AQAhlQFAAPoBACGWAUAA-gEAIQwHAAD8AQAgewEA1wEAIYsBAQDXAQAhjgEAAPkBjgEijwEBANcBACGQAQEA1wEAIZEBAQDXAQAhkgEBANcBACGTAUAA-gEAIZQBQAD7AQAhlQFAAPoBACGWAUAA-gEAIQwIAACUAgAgewEAAAABiwEBAAAAAY4BAAAAjgECjwEBAAAAAZABAQAAAAGRAQEAAAABkgEBAAAAAZMBQAAAAAGUAUAAAAABlQFAAAAAAZYBQAAAAAECAAAAQwAgGAAA1wIAIAMAAABGACAYAADXAgAgGQAA2wIAIA4AAABGACAIAAD9AQAgEQAA2wIAIHsBANcBACGLAQEA1wEAIY4BAAD5AY4BIo8BAQDXAQAhkAEBANcBACGRAQEA1wEAIZIBAQDXAQAhkwFAAPoBACGUAUAA-wEAIZUBQAD6AQAhlgFAAPoBACEMCAAA_QEAIHsBANcBACGLAQEA1wEAIY4BAAD5AY4BIo8BAQDXAQAhkAEBANcBACGRAQEA1wEAIZIBAQDXAQAhkwFAAPoBACGUAUAA-wEAIZUBQAD6AQAhlgFAAPoBACEBiwEBAAAAAQMFAAkKBgILEwgCAwADCQABAwUABwcKBAgNAgIDAAMGAAUCBAsEBQAGAQQMAAIHDgAIDwABCQABAgoUAAsVAAAAAAMFAA4eAA8fABAAAAADBQAOHgAPHwAQAQkAAQEJAAEFBQAVHgAYHwAZMAAWMQAXAAAAAAAFBQAVHgAYHwAZMAAWMQAXAAADBQAeHgAfHwAgAAAAAwUAHh4AHx8AIAIDAAMGAAUCAwADBgAFAwUAJR4AJh8AJwAAAAMFACUeACYfACcCAwADCQABAgMAAwkAAQMFACweAC0fAC4AAAADBQAsHgAtHwAuAAADBQAzHgA0HwA1AAAAAwUAMx4ANB8ANQwCAQ0WAQ4ZAQ8aARAbARIdARMfChQgCxUiARYkChclDBomARsnARwoCiArDSEsESItCCMuCCQvCCUwCCYxCCczCCg1Cik2Eio4CCs6Ciw7Ey08CC49CC8-CjJBFDNCGjREAzVFAzZIAzdJAzhKAzlMAzpOCjtPGzxRAz1TCj5UHD9VA0BWA0FXCkJaHUNbIURcBEVdBEZeBEdfBEhgBEliBEpkCktlIkxnBE1pCk5qI09rBFBsBFFtClJwJFNxKFRyAlVzAlZ0Ald1Alh2All4Alp6Clt7KVx9Al1_Cl6AASpfgQECYIIBAmGDAQpihgErY4cBL2SJAQVligEFZo0BBWeOAQVojwEFaZEBBWqTAQprlAEwbJYBBW2YAQpumQExb5oBBXCbAQVxnAEKcp8BMnOgATY"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await __turbopack_context__.A("[externals]/node:buffer [external] (node:buffer, cjs, async loader)");
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async ()=>await __turbopack_context__.A("[externals]/@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs [external] (@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs, esm_import, [project]/node_modules/@prisma/client, async loader)"),
    getQueryCompilerWasmModule: async ()=>{
        const { wasm } = await __turbopack_context__.A("[externals]/@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs [external] (@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs, esm_import, [project]/node_modules/@prisma/client, async loader)");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["getPrismaClient"](config);
}
}),
"[project]/src/generated/prisma/internal/prismaNamespace.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnyNull",
    ()=>AnyNull,
    "CreatorScalarFieldEnum",
    ()=>CreatorScalarFieldEnum,
    "DbNull",
    ()=>DbNull,
    "Decimal",
    ()=>Decimal,
    "JsonNull",
    ()=>JsonNull,
    "LinkScalarFieldEnum",
    ()=>LinkScalarFieldEnum,
    "ModelName",
    ()=>ModelName,
    "NullTypes",
    ()=>NullTypes,
    "NullsOrder",
    ()=>NullsOrder,
    "PrismaClientInitializationError",
    ()=>PrismaClientInitializationError,
    "PrismaClientKnownRequestError",
    ()=>PrismaClientKnownRequestError,
    "PrismaClientRustPanicError",
    ()=>PrismaClientRustPanicError,
    "PrismaClientUnknownRequestError",
    ()=>PrismaClientUnknownRequestError,
    "PrismaClientValidationError",
    ()=>PrismaClientValidationError,
    "ProjectCreatorScalarFieldEnum",
    ()=>ProjectCreatorScalarFieldEnum,
    "ProjectScalarFieldEnum",
    ()=>ProjectScalarFieldEnum,
    "ProjectTechnologyScalarFieldEnum",
    ()=>ProjectTechnologyScalarFieldEnum,
    "QueryMode",
    ()=>QueryMode,
    "SortOrder",
    ()=>SortOrder,
    "Sql",
    ()=>Sql,
    "TechnologyScalarFieldEnum",
    ()=>TechnologyScalarFieldEnum,
    "TransactionIsolationLevel",
    ()=>TransactionIsolationLevel,
    "defineExtension",
    ()=>defineExtension,
    "empty",
    ()=>empty,
    "getExtensionContext",
    ()=>getExtensionContext,
    "join",
    ()=>join,
    "prismaVersion",
    ()=>prismaVersion,
    "raw",
    ()=>raw,
    "sql",
    ()=>sql
]);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the client.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client/runtime/client [external] (@prisma/client/runtime/client, cjs, [project]/node_modules/@prisma/client)");
;
const PrismaClientKnownRequestError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientKnownRequestError"];
const PrismaClientUnknownRequestError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientUnknownRequestError"];
const PrismaClientRustPanicError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientRustPanicError"];
const PrismaClientInitializationError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientInitializationError"];
const PrismaClientValidationError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientValidationError"];
const sql = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["sqltag"];
const empty = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["empty"];
const join = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["join"];
const raw = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["raw"];
const Sql = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Sql"];
const Decimal = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Decimal"];
const getExtensionContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Extensions"].getExtensionContext;
const prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
const NullTypes = {
    DbNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["NullTypes"].DbNull,
    JsonNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["NullTypes"].JsonNull,
    AnyNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["NullTypes"].AnyNull
};
const DbNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["DbNull"];
const JsonNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["JsonNull"];
const AnyNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["AnyNull"];
const ModelName = {
    Creator: 'Creator',
    Link: 'Link',
    Project: 'Project',
    ProjectTechnology: 'ProjectTechnology',
    ProjectCreator: 'ProjectCreator',
    Technology: 'Technology'
};
const TransactionIsolationLevel = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["makeStrictEnum"]({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
const CreatorScalarFieldEnum = {
    creatorId: 'creatorId',
    name: 'name',
    slug: 'slug',
    role: 'role',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    bgColor: 'bgColor',
    colorText: 'colorText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const LinkScalarFieldEnum = {
    linkId: 'linkId',
    url: 'url',
    type: 'type',
    order: 'order',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const ProjectScalarFieldEnum = {
    projectId: 'projectId',
    status: 'status',
    imageLogo: 'imageLogo',
    title: 'title',
    description: 'description',
    link: 'link',
    bgColor: 'bgColor',
    startOfDevelopment: 'startOfDevelopment',
    endOfDevelopment: 'endOfDevelopment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const ProjectTechnologyScalarFieldEnum = {
    projectId: 'projectId',
    technologyId: 'technologyId'
};
const ProjectCreatorScalarFieldEnum = {
    projectId: 'projectId',
    creatorId: 'creatorId'
};
const TechnologyScalarFieldEnum = {
    technologyId: 'technologyId',
    name: 'name',
    slug: 'slug',
    iconUrl: 'iconUrl',
    bgColor: 'bgColor',
    colorText: 'colorText'
};
const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
const NullsOrder = {
    first: 'first',
    last: 'last'
};
const defineExtension = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Extensions"].defineExtension;
}),
"[project]/src/lib/cors.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CORS_HEADERS",
    ()=>CORS_HEADERS
]);
const CORS_HEADERS = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true'
};
}),
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/prisma/client.ts [app-route] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) throw new Error('DATABASE_URL is not defined in environment variables');
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaPg"]({
    connectionString: dbUrl
});
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrismaClient"]({
    adapter
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07-a4er._.js.map