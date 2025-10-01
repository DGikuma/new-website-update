(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/blog/postsData.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const posts = [
    {
        title: "Hospital Cash Insurance in Kenya: How It Works & Why You Need It",
        excerpt: "Hospital cash insurance cushions families during unexpected hospital stays, offering affordable protection when most needed.",
        date: "Sep 1, 2025",
        image: "/images/blog-hospital-cash.jpg",
        slug: "hospital-cash-insurance-kenya-how-it-works-why-you-need-it",
        content: "\n### What is Hospital Cash Insurance?\n\nHospital cash insurance provides you with a **daily cash benefit** during hospital admission. Unlike traditional health insurance, it doesn’t pay hospitals directly—it puts money in your hands to cover:\n\n- Lost income while admitted  \n- Transport and meals for family members  \n- Out-of-pocket costs not covered by NHIF or medical insurance  \n\n### Why it matters\n\nFor many families in Kenya, even a short hospital stay can **disrupt finances**. This cover ensures you maintain dignity and stability during recovery.\n\n> 💡 At Birdview Microinsurance, we believe in protection that’s *simple, affordable, and effective*.\n    "
    },
    {
        title: "Last Expense Insurance in Kenya: A Complete Guide for Families",
        excerpt: "Funeral costs can overwhelm grieving families. Learn how last expense insurance provides dignity, preparedness, and financial relief.",
        date: "Sep 3, 2025",
        image: "/images/blog-last-expense.jpg",
        slug: "last-expense-insurance-kenya-complete-guide-families",
        content: "\n### Why Last Expense Insurance?\n\nFunerals in Kenya can cost **KES 150,000 – 400,000** or more. Without planning, families often turn to *harambees* or debt.\n\n### Benefits of Last Expense Insurance\n- Immediate payout to the family  \n- Covers funeral expenses and logistics  \n- Provides peace of mind and dignity  \n\n### Key Takeaway\nThis cover is one of the most **important protections** for families today.\n    "
    }
];
const __TURBOPACK__default__export__ = posts;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/blog/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/blog/[slug]/page.tsx
__turbopack_context__.s([
    "default",
    ()=>BlogPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-D5XJWRAV.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blog$2f$postsData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/blog/postsData.tsx [app-client] (ecmascript)"); // adjust the path if needed
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function BlogPost() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blog$2f$postsData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findIndex((p)=>p.slug === (params === null || params === void 0 ? void 0 : params.slug));
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blog$2f$postsData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][index];
    if (!post) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])(); // fallback 404 page
    }
    const prevPost = index > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blog$2f$postsData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][index - 1] : null;
    const nextPost = index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blog$2f$postsData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$blog$2f$postsData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][index + 1] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen px-6 py-20 bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center opacity-10",
                style: {
                    backgroundImage: "url('/images/corporate-bg.jpg')"
                }
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                className: "max-w-4xl mx-auto relative z-10 flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/blog",
                            className: "inline-block px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full shadow transition-all duration-300",
                            children: "← Back to Blog"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/[slug]/page.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                        className: "bg-white/90 backdrop-blur-xl border border-gray-300 shadow-xl rounded-2xl overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: post.image,
                                alt: post.title,
                                className: "w-full h-96 object-cover"
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                className: "p-6 text-4xl font-bold text-primary",
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                className: "p-6 text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 mb-6",
                                        children: post.date
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                        components: {
                                            p: (param)=>{
                                                let { node, ...props } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4 text-gray-700 leading-relaxed",
                                                    ...props
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 37
                                                }, void 0);
                                            },
                                            a: (param)=>{
                                                let { node, ...props } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "text-blue-700 hover:underline",
                                                    ...props,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 37
                                                }, void 0);
                                            },
                                            h1: (param)=>{
                                                let { node, ...props } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl font-bold text-primary mb-4",
                                                    ...props
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 37
                                                }, void 0);
                                            },
                                            h2: (param)=>{
                                                let { node, ...props } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-semibold text-primary mb-3",
                                                    ...props
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 37
                                                }, void 0);
                                            },
                                            h3: (param)=>{
                                                let { node, ...props } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-primary mb-2",
                                                    ...props
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 37
                                                }, void 0);
                                            },
                                            ul: (param)=>{
                                                let { node, ...props } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc list-inside mb-4",
                                                    ...props
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 37
                                                }, void 0);
                                            },
                                            ol: (param)=>{
                                                let { node, ...props } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                    className: "list-decimal list-inside mb-4",
                                                    ...props
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 37
                                                }, void 0);
                                            },
                                            li: (param)=>{
                                                let { node, ...props } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "mb-2 ml-2",
                                                    ...props
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 37
                                                }, void 0);
                                            },
                                            strong: (param)=>{
                                                let { node, ...props } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "font-semibold",
                                                    ...props
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 37
                                                }, void 0);
                                            }
                                        },
                                        children: post.content || "Content coming soon..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/[slug]/page.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mt-6 gap-4",
                        children: [
                            prevPost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.03
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blog/".concat(prevPost.slug),
                                    className: "block px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-full shadow transition-all duration-300",
                                    children: [
                                        "← ",
                                        prevPost.title.length > 30 ? prevPost.title.slice(0, 30) + "..." : prevPost.title
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 105,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 25
                            }, this),
                            nextPost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.03
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blog/".concat(nextPost.slug),
                                    className: "block px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-full shadow transition-all duration-300",
                                    children: [
                                        nextPost.title.length > 30 ? nextPost.title.slice(0, 30) + "..." : nextPost.title,
                                        " →"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/[slug]/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 119,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.tsx",
                                lineNumber: 128,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/[slug]/page.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/[slug]/page.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/[slug]/page.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(BlogPost, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = BlogPost;
var _c;
__turbopack_context__.k.register(_c, "BlogPost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_blog_403459c3._.js.map