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
"[project]/src/app/api/technologies/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "GET",
    ()=>GET
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
async function GET(req) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].technology.findMany({
            select: {
                technologyId: true,
                bgColor: true,
                colorText: true,
                iconUrl: true,
                name: true,
                slug: true
            }
        });
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
    "inlineSchema": "model Creator {\n  creatorId String @id @default(cuid()) @map(\"creator_id\")\n\n  name      String\n  slug      String  @unique\n  role      String?\n  bio       String?\n  avatarUrl String? @map(\"avatar_url\")\n\n  bgColor   String? @map(\"bg_color\")\n  colorText String? @map(\"color_text\")\n\n  projectCreators ProjectCreator[]\n  links           Link[]\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"creators\")\n}\n\nenum LinkType {\n  GITHUB\n  TELEGRAM\n  VK\n  PORTFOLIO\n}\n\nmodel Link {\n  linkId String @id @default(cuid()) @map(\"link_id\")\n\n  url   String\n  type  LinkType\n  order Int      @default(0)\n\n  creatorId String  @map(\"creator_id\")\n  creator   Creator @relation(fields: [creatorId], references: [creatorId], onDelete: Cascade)\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"links\")\n}\n\nenum Status {\n  COMPLETED\n  IN_DEVELOPMENT\n}\n\nmodel Project {\n  projectId String @id @default(cuid()) @map(\"project_id\")\n\n  status      Status @default(IN_DEVELOPMENT)\n  imageLogo   String @map(\"image_logo\")\n  title       String\n  description String\n\n  link    String\n  bgColor String @map(\"bg_color\")\n\n  startOfDevelopment DateTime  @map(\"start_of_development\")\n  endOfDevelopment   DateTime? @map(\"end_of_development\")\n\n  technologies ProjectTechnology[]\n  creators     ProjectCreator[]\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"projects\")\n}\n\nmodel ProjectTechnology {\n  projectId String  @map(\"project_id\")\n  project   Project @relation(fields: [projectId], references: [projectId], onDelete: Cascade)\n\n  technologyId String     @map(\"technology_id\")\n  technology   Technology @relation(fields: [technologyId], references: [technologyId], onDelete: Cascade)\n\n  @@id([projectId, technologyId])\n  @@index([technologyId])\n}\n\nmodel ProjectCreator {\n  projectId String  @map(\"project_id\")\n  project   Project @relation(fields: [projectId], references: [projectId], onDelete: Cascade)\n\n  creatorId String  @map(\"creator_id\")\n  creator   Creator @relation(fields: [creatorId], references: [creatorId], onDelete: Cascade)\n\n  @@id([projectId, creatorId])\n  @@index([creatorId])\n}\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Technology {\n  technologyId String  @id @default(cuid()) @map(\"technology_id\")\n  name         String\n  slug         String  @unique\n  iconUrl      String? @map(\"icon_url\")\n  bgColor      String? @map(\"bg_color\")\n  colorText    String? @map(\"color_text\")\n\n  projects ProjectTechnology[]\n}\n\nmodel University {\n  universityId String @id @default(cuid()) @map(\"university_id\")\n\n  fullName  String  @map(\"full_name\")\n  shortName String? @map(\"short_name\")\n  slug      String  @unique\n\n  cityId String @map(\"cuty_id\")\n  city   City   @relation(fields: [cityId], references: [cityId])\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@index([cityId])\n  @@map(\"universities\")\n}\n\nmodel City {\n  cityId String @id @default(cuid()) @map(\"city_id\")\n\n  name String\n  slug String @unique\n\n  universities University[]\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"cityes\")\n}\n",
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
config.runtimeDataModel = JSON.parse("{\"models\":{\"Creator\":{\"fields\":[{\"name\":\"creatorId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"creator_id\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bio\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"avatarUrl\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"avatar_url\"},{\"name\":\"bgColor\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"bg_color\"},{\"name\":\"colorText\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"color_text\"},{\"name\":\"projectCreators\",\"kind\":\"object\",\"type\":\"ProjectCreator\",\"relationName\":\"CreatorToProjectCreator\"},{\"name\":\"links\",\"kind\":\"object\",\"type\":\"Link\",\"relationName\":\"CreatorToLink\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"creators\"},\"Link\":{\"fields\":[{\"name\":\"linkId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"link_id\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"LinkType\"},{\"name\":\"order\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"creator_id\"},{\"name\":\"creator\",\"kind\":\"object\",\"type\":\"Creator\",\"relationName\":\"CreatorToLink\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"links\"},\"Project\":{\"fields\":[{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Status\"},{\"name\":\"imageLogo\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"image_logo\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"link\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bgColor\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"bg_color\"},{\"name\":\"startOfDevelopment\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"start_of_development\"},{\"name\":\"endOfDevelopment\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"end_of_development\"},{\"name\":\"technologies\",\"kind\":\"object\",\"type\":\"ProjectTechnology\",\"relationName\":\"ProjectToProjectTechnology\"},{\"name\":\"creators\",\"kind\":\"object\",\"type\":\"ProjectCreator\",\"relationName\":\"ProjectToProjectCreator\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"projects\"},\"ProjectTechnology\":{\"fields\":[{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToProjectTechnology\"},{\"name\":\"technologyId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"technology_id\"},{\"name\":\"technology\",\"kind\":\"object\",\"type\":\"Technology\",\"relationName\":\"ProjectTechnologyToTechnology\"}],\"dbName\":null},\"ProjectCreator\":{\"fields\":[{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"project_id\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToProjectCreator\"},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"creator_id\"},{\"name\":\"creator\",\"kind\":\"object\",\"type\":\"Creator\",\"relationName\":\"CreatorToProjectCreator\"}],\"dbName\":null},\"Technology\":{\"fields\":[{\"name\":\"technologyId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"technology_id\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"iconUrl\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"icon_url\"},{\"name\":\"bgColor\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"bg_color\"},{\"name\":\"colorText\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"color_text\"},{\"name\":\"projects\",\"kind\":\"object\",\"type\":\"ProjectTechnology\",\"relationName\":\"ProjectTechnologyToTechnology\"}],\"dbName\":null},\"University\":{\"fields\":[{\"name\":\"universityId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"university_id\"},{\"name\":\"fullName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"full_name\"},{\"name\":\"shortName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"short_name\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cityId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"cuty_id\"},{\"name\":\"city\",\"kind\":\"object\",\"type\":\"City\",\"relationName\":\"CityToUniversity\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"universities\"},\"City\":{\"fields\":[{\"name\":\"cityId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"city_id\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"universities\",\"kind\":\"object\",\"type\":\"University\",\"relationName\":\"CityToUniversity\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"cityes\"}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"project\",\"projects\",\"_count\",\"technology\",\"technologies\",\"creators\",\"creator\",\"projectCreators\",\"links\",\"Creator.findUnique\",\"Creator.findUniqueOrThrow\",\"Creator.findFirst\",\"Creator.findFirstOrThrow\",\"Creator.findMany\",\"data\",\"Creator.createOne\",\"Creator.createMany\",\"Creator.createManyAndReturn\",\"Creator.updateOne\",\"Creator.updateMany\",\"Creator.updateManyAndReturn\",\"create\",\"update\",\"Creator.upsertOne\",\"Creator.deleteOne\",\"Creator.deleteMany\",\"having\",\"_min\",\"_max\",\"Creator.groupBy\",\"Creator.aggregate\",\"Link.findUnique\",\"Link.findUniqueOrThrow\",\"Link.findFirst\",\"Link.findFirstOrThrow\",\"Link.findMany\",\"Link.createOne\",\"Link.createMany\",\"Link.createManyAndReturn\",\"Link.updateOne\",\"Link.updateMany\",\"Link.updateManyAndReturn\",\"Link.upsertOne\",\"Link.deleteOne\",\"Link.deleteMany\",\"_avg\",\"_sum\",\"Link.groupBy\",\"Link.aggregate\",\"Project.findUnique\",\"Project.findUniqueOrThrow\",\"Project.findFirst\",\"Project.findFirstOrThrow\",\"Project.findMany\",\"Project.createOne\",\"Project.createMany\",\"Project.createManyAndReturn\",\"Project.updateOne\",\"Project.updateMany\",\"Project.updateManyAndReturn\",\"Project.upsertOne\",\"Project.deleteOne\",\"Project.deleteMany\",\"Project.groupBy\",\"Project.aggregate\",\"ProjectTechnology.findUnique\",\"ProjectTechnology.findUniqueOrThrow\",\"ProjectTechnology.findFirst\",\"ProjectTechnology.findFirstOrThrow\",\"ProjectTechnology.findMany\",\"ProjectTechnology.createOne\",\"ProjectTechnology.createMany\",\"ProjectTechnology.createManyAndReturn\",\"ProjectTechnology.updateOne\",\"ProjectTechnology.updateMany\",\"ProjectTechnology.updateManyAndReturn\",\"ProjectTechnology.upsertOne\",\"ProjectTechnology.deleteOne\",\"ProjectTechnology.deleteMany\",\"ProjectTechnology.groupBy\",\"ProjectTechnology.aggregate\",\"ProjectCreator.findUnique\",\"ProjectCreator.findUniqueOrThrow\",\"ProjectCreator.findFirst\",\"ProjectCreator.findFirstOrThrow\",\"ProjectCreator.findMany\",\"ProjectCreator.createOne\",\"ProjectCreator.createMany\",\"ProjectCreator.createManyAndReturn\",\"ProjectCreator.updateOne\",\"ProjectCreator.updateMany\",\"ProjectCreator.updateManyAndReturn\",\"ProjectCreator.upsertOne\",\"ProjectCreator.deleteOne\",\"ProjectCreator.deleteMany\",\"ProjectCreator.groupBy\",\"ProjectCreator.aggregate\",\"Technology.findUnique\",\"Technology.findUniqueOrThrow\",\"Technology.findFirst\",\"Technology.findFirstOrThrow\",\"Technology.findMany\",\"Technology.createOne\",\"Technology.createMany\",\"Technology.createManyAndReturn\",\"Technology.updateOne\",\"Technology.updateMany\",\"Technology.updateManyAndReturn\",\"Technology.upsertOne\",\"Technology.deleteOne\",\"Technology.deleteMany\",\"Technology.groupBy\",\"Technology.aggregate\",\"universities\",\"city\",\"University.findUnique\",\"University.findUniqueOrThrow\",\"University.findFirst\",\"University.findFirstOrThrow\",\"University.findMany\",\"University.createOne\",\"University.createMany\",\"University.createManyAndReturn\",\"University.updateOne\",\"University.updateMany\",\"University.updateManyAndReturn\",\"University.upsertOne\",\"University.deleteOne\",\"University.deleteMany\",\"University.groupBy\",\"University.aggregate\",\"City.findUnique\",\"City.findUniqueOrThrow\",\"City.findFirst\",\"City.findFirstOrThrow\",\"City.findMany\",\"City.createOne\",\"City.createMany\",\"City.createManyAndReturn\",\"City.updateOne\",\"City.updateMany\",\"City.updateManyAndReturn\",\"City.upsertOne\",\"City.deleteOne\",\"City.deleteMany\",\"City.groupBy\",\"City.aggregate\",\"AND\",\"OR\",\"NOT\",\"cityId\",\"name\",\"slug\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"every\",\"some\",\"none\",\"universityId\",\"fullName\",\"shortName\",\"technologyId\",\"iconUrl\",\"bgColor\",\"colorText\",\"projectId\",\"creatorId\",\"Status\",\"status\",\"imageLogo\",\"title\",\"description\",\"link\",\"startOfDevelopment\",\"endOfDevelopment\",\"linkId\",\"url\",\"LinkType\",\"type\",\"order\",\"role\",\"bio\",\"avatarUrl\",\"projectId_technologyId\",\"projectId_creatorId\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "tANHgAEPCgAA-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_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_AQAgyAEAAL8BACAJlgEAAOkBADCXAQAAngEAEJgBAADpAQAwmgEBANYBACGbAQEA1gEAIa8BAQDWAQAhsAEBAOIBACGxAQEA4gEAIbIBAQDiAQAhCgQAAOsBACCWAQAA6gEAMJcBAACLAQAQmAEAAOoBADCaAQEA3gEAIZsBAQDeAQAhrwEBAN4BACGwAQEA5wEAIbEBAQDnAQAhsgEBAOcBACEDqQEAAAcAIKoBAAAHACCrAQAABwAgBZYBAADsAQAwlwEAAIUBABCYAQAA7AEAMLMBAQDWAQAhtAEBANYBACEFlgEAAO0BADCXAQAAbwAQmAEAAO0BADCvAQEA1gEAIbMBAQDWAQAhDpYBAADuAQAwlwEAAFkAEJgBAADuAQAwnAFAANcBACGdAUAA1wEAIbEBAQDWAQAhswEBANYBACG2AQAA7wG2ASK3AQEA1gEAIbgBAQDWAQAhuQEBANYBACG6AQEA1gEAIbsBQADXAQAhvAFAAPABACEHBQAA2QEAIB4AAPQBACAfAAD0AQAgngEAAAC2AQKfAQAAALYBCKABAAAAtgEIpQEAAPMBtgEiCwUAAOQBACAeAADyAQAgHwAA8gEAIJ4BQAAAAAGfAUAAAAAFoAFAAAAABaEBQAAAAAGiAUAAAAABowFAAAAAAaQBQAAAAAGlAUAA8QEAIQsFAADkAQAgHgAA8gEAIB8AAPIBACCeAUAAAAABnwFAAAAABaABQAAAAAWhAUAAAAABogFAAAAAAaMBQAAAAAGkAUAAAAABpQFAAPEBACEIngFAAAAAAZ8BQAAAAAWgAUAAAAAFoQFAAAAAAaIBQAAAAAGjAUAAAAABpAFAAAAAAaUBQADyAQAhBwUAANkBACAeAAD0AQAgHwAA9AEAIJ4BAAAAtgECnwEAAAC2AQigAQAAALYBCKUBAADzAbYBIgSeAQAAALYBAp8BAAAAtgEIoAEAAAC2AQilAQAA9AG2ASIQBwAA6wEAIAgAAPgBACCWAQAA9QEAMJcBAABGABCYAQAA9QEAMJwBQADfAQAhnQFAAN8BACGxAQEA3gEAIbMBAQDeAQAhtgEAAPYBtgEitwEBAN4BACG4AQEA3gEAIbkBAQDeAQAhugEBAN4BACG7AUAA3wEAIbwBQAD3AQAhBJ4BAAAAtgECnwEAAAC2AQigAQAAALYBCKUBAAD0AbYBIgieAUAAAAABnwFAAAAABaABQAAAAAWhAUAAAAABogFAAAAAAaMBQAAAAAGkAUAAAAABpQFAAPIBACEDqQEAAAMAIKoBAAADACCrAQAAAwAgCpYBAAD5AQAwlwEAAEAAEJgBAAD5AQAwnAFAANcBACGdAUAA1wEAIbQBAQDWAQAhvQEBANYBACG-AQEA1gEAIcABAAD6AcABIsEBAgD7AQAhBwUAANkBACAeAAD_AQAgHwAA_wEAIJ4BAAAAwAECnwEAAADAAQigAQAAAMABCKUBAAD-AcABIg0FAADZAQAgHgAA2QEAIB8AANkBACAwAAD9AQAgMQAA2QEAIJ4BAgAAAAGfAQIAAAAEoAECAAAABKEBAgAAAAGiAQIAAAABowECAAAAAaQBAgAAAAGlAQIA_AEAIQ0FAADZAQAgHgAA2QEAIB8AANkBACAwAAD9AQAgMQAA2QEAIJ4BAgAAAAGfAQIAAAAEoAECAAAABKEBAgAAAAGiAQIAAAABowECAAAAAaQBAgAAAAGlAQIA_AEAIQieAQgAAAABnwEIAAAABKABCAAAAAShAQgAAAABogEIAAAAAaMBCAAAAAGkAQgAAAABpQEIAP0BACEHBQAA2QEAIB4AAP8BACAfAAD_AQAgngEAAADAAQKfAQAAAMABCKABAAAAwAEIpQEAAP4BwAEiBJ4BAAAAwAECnwEAAADAAQigAQAAAMABCKUBAAD_AcABIg2WAQAAgAIAMJcBAAAqABCYAQAAgAIAMJoBAQDWAQAhmwEBANYBACGcAUAA1wEAIZ0BQADXAQAhsQEBAOIBACGyAQEA4gEAIbQBAQDWAQAhwgEBAOIBACHDAQEA4gEAIcQBAQDiAQAhDwoAAPgBACALAACCAgAglgEAAIECADCXAQAAFwAQmAEAAIECADCaAQEA3gEAIZsBAQDeAQAhnAFAAN8BACGdAUAA3wEAIbEBAQDnAQAhsgEBAOcBACG0AQEA3gEAIcIBAQDnAQAhwwEBAOcBACHEAQEA5wEAIQOpAQAAEAAgqgEAABAAIKsBAAAQACALCQAAhgIAIJYBAACDAgAwlwEAABAAEJgBAACDAgAwnAFAAN8BACGdAUAA3wEAIbQBAQDeAQAhvQEBAN4BACG-AQEA3gEAIcABAACEAsABIsEBAgCFAgAhBJ4BAAAAwAECnwEAAADAAQigAQAAAMABCKUBAAD_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-AIAMMsBAAD5AgAgzAEAAPoCADDNAQAA-gIAMM4BAAD6AgAwzwEAAPoCADDQAQAA_AIAMNEBAAD9AgAwBpwBQAAAAAGdAUAAAAABvQEBAAAAAb4BAQAAAAHAAQAAAMABAsEBAgAAAAECAAAAEgAgGAAAgQMAIAMAAAASACAYAACBAwAgGQAAgAMAIAERAACSAwAwCwkAAIYCACCWAQAAgwIAMJcBAAAQABCYAQAAgwIAMJwBQADfAQAhnQFAAN8BACG0AQEA3gEAIb0BAQAAAAG-AQEA3gEAIcABAACEAsABIsEBAgCFAgAhAgAAABIAIBEAAIADACACAAAA_gIAIBEAAP8CACAKlgEAAP0CADCXAQAA_gIAEJgBAAD9AgAwnAFAAN8BACGdAUAA3wEAIbQBAQDeAQAhvQEBAN4BACG-AQEA3gEAIcABAACEAsABIsEBAgCFAgAhCpYBAAD9AgAwlwEAAP4CABCYAQAA_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_AQAgGAAArwMAIBkAALMDACAHAAAAvwEAIBEAALMDACCZAQEAkAIAIZoBAQCQAgAhmwEBAJACACGcAUAAkQIAIZ0BQACRAgAhBZkBAQCQAgAhmgEBAJACACGbAQEAkAIAIZwBQACRAgAhnQFAAJECACEGmwEBAAAAAZwBQAAAAAGdAUAAAAABrAEBAAAAAa0BAQAAAAGuAQEAAAABAwUACQoGAgsTCAIDAAMJAAEDBQAHBwoECA0CAgMAAwYABQIECwQFAAYBBAwAAgcOAAgPAAEJAAECChQACxUAAAAAAwUADh4ADx8AEAAAAAMFAA4eAA8fABABCQABAQkAAQUFABUeABgfABkwABYxABcAAAAAAAUFABUeABgfABkwABYxABcAAAMFAB4eAB8fACAAAAADBQAeHgAfHwAgAgMAAwYABQIDAAMGAAUDBQAlHgAmHwAnAAAAAwUAJR4AJh8AJwIDAAMJAAECAwADCQABAwUALB4ALR8ALgAAAAMFACweAC0fAC4AAAMFADMeADQfADUAAAADBQAzHgA0HwA1AXUAOAIFADl0pQE3AXSmAQABdQA4AXUAOAMFAD0eAD4fAD8AAAADBQA9HgA-HwA_AAADBQBEHgBFHwBGAAAAAwUARB4ARR8ARgwCAQ0WAQ4ZAQ8aARAbARIdARMfChQgCxUiARYkChclDBomARsnARwoCiArDSEsESItCCMuCCQvCCUwCCYxCCczCCg1Cik2Eio4CCs6Ciw7Ey08CC49CC8-CjJBFDNCGjREAzVFAzZIAzdJAzhKAzlMAzpOCjtPGzxRAz1TCj5UHD9VA0BWA0FXCkJaHUNbIURcBEVdBEZeBEdfBEhgBEliBEpkCktlIkxnBE1pCk5qI09rBFBsBFFtClJwJFNxKFRyAlVzAlZ0Ald1Alh2All4Alp6Clt7KVx9Al1_Cl6AASpfgQECYIIBAmGDAQpihgErY4cBL2SJAQVligEFZo0BBWeOAQVojwEFaZEBBWqTAQprlAEwbJYBBW2YAQpumQExb5oBBXCbAQVxnAEKcp8BMnOgATZ2ogE3d6cBN3ioATd5qQE3eqoBN3usATd8rgEKfa8BOn6xATd_swEKgAG0ATuBAbUBN4IBtgE3gwG3AQqEAboBPIUBuwFAhgG9ATiHAb4BOIgBwQE4iQHCATiKAcMBOIsBxQE4jAHHAQqNAcgBQY4BygE4jwHMAQqQAc0BQpEBzgE4kgHPATiTAdABCpQB0wFDlQHUAUc"
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
    "CityScalarFieldEnum",
    ()=>CityScalarFieldEnum,
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
    "UniversityScalarFieldEnum",
    ()=>UniversityScalarFieldEnum,
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
    Technology: 'Technology',
    University: 'University',
    City: 'City'
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
const UniversityScalarFieldEnum = {
    universityId: 'universityId',
    fullName: 'fullName',
    shortName: 'shortName',
    slug: 'slug',
    cityId: 'cityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const CityScalarFieldEnum = {
    cityId: 'cityId',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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

//# sourceMappingURL=%5Broot-of-the-server%5D__19bjl_h._.js.map