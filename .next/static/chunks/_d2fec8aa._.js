(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/config/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "Birdview Microinsurance",
    description: "Exceeding Your Expectations.",
    navItems: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Docs",
            href: "/docs"
        },
        {
            label: "Pricing",
            href: "/pricing"
        },
        {
            label: "Blog",
            href: "/blog"
        },
        {
            label: "About",
            href: "/about"
        }
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile"
        },
        {
            label: "Dashboard",
            href: "/dashboard"
        },
        {
            label: "Projects",
            href: "/projects"
        },
        {
            label: "Team",
            href: "/team"
        },
        {
            label: "Calendar",
            href: "/calendar"
        },
        {
            label: "Settings",
            href: "/settings"
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback"
        },
        {
            label: "Logout",
            href: "/logout"
        }
    ],
    links: {
        facebook: "https://www.facebook.com/profile.php?id=61572489643530&mibextid=ZbWKwL",
        twitter: "https://x.com/BirdviewInsur?t=oTQd4bz-Tlhpb9OXuEgf2g&s=08",
        instagram: "https://www.instagram.com/birdviewinsurance?igsh=bXN2bng0MjUwaGtp",
        tiktok: "https://www.tiktok.com/@birdview.insurance",
        Linkedin: "https://www.linkedin.com/in/birdview-insurance-71b32431a",
        youtube: "https://youtube.com/@birdviewinsurance?si=2pc3TACXTrqNWswA"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/link/dist/chunk-JOT4BT4P.mjs [app-client] (ecmascript) <export link_default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-D5XJWRAV.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$P43IVKP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/accordion/dist/chunk-P43IVKP7.mjs [app-client] (ecmascript) <export accordion_default as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/accordion/dist/chunk-HAJUSXOG.mjs [app-client] (ecmascript) <export accordion_item_base_default as AccordionItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const stats = [
    {
        label: "Active Clients",
        value: 1200,
        suffix: "+",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-8 h-8 text-danger"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 29,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Policies Issued",
        value: 4500,
        suffix: "+",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "w-8 h-8 text-danger"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 30,
            columnNumber: 63
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Claims Settled",
        value: 3200,
        suffix: "+",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
            className: "w-8 h-8 text-danger"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 31,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Customer Satisfaction",
        value: 98,
        suffix: "%",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: "w-8 h-8 text-danger"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 32,
            columnNumber: 67
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Partner Agencies",
        value: 85,
        suffix: "+",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"], {
            className: "w-8 h-8 text-danger"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 33,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Years of Service",
        value: 10,
        suffix: "+",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "w-8 h-8 text-danger"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 34,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function StatCard(param) {
    let { label, value, suffix, icon } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatCard.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "StatCard.useEffect": (entries)=>{
                    entries.forEach({
                        "StatCard.useEffect": (entry)=>{
                            if (entry.isIntersecting && !hasAnimated) {
                                setHasAnimated(true);
                                let start = 0;
                                const duration = 2000;
                                const stepTime = Math.abs(Math.floor(duration / value));
                                const timer = setInterval({
                                    "StatCard.useEffect.timer": ()=>{
                                        start += 1;
                                        setDisplayValue(start);
                                        if (start >= value) clearInterval(timer);
                                    }
                                }["StatCard.useEffect.timer"], stepTime);
                            }
                        }
                    }["StatCard.useEffect"]);
                }
            }["StatCard.useEffect"], {
                threshold: 0.5
            });
            if (ref.current) observer.observe(ref.current);
            return ({
                "StatCard.useEffect": ()=>{
                    if (ref.current) observer.unobserve(ref.current);
                }
            })["StatCard.useEffect"];
        }
    }["StatCard.useEffect"], [
        value,
        hasAnimated
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6
        },
        viewport: {
            once: true
        },
        className: "bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 flex flex-col items-center text-center border border-white/20 hover:scale-105 transform transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: icon
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                className: "text-4xl font-extrabold text-white",
                children: [
                    displayValue,
                    suffix
                ]
            }, displayValue, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-gray-100 text-lg",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(StatCard, "tjU8YyvKL5t2LfxQHYSHYvDi2k8=");
_c = StatCard;
function Home() {
    _s1();
    const allProducts = [
        {
            title: "Evacuation and Repatriation",
            img: "/assets/productsPhotos/Evacuation-and-Repatriation.png",
            desc: "This cover is crafted to intervene and rescue situations of citizens being either stranded or deceased abroad."
        },
        {
            title: "Last Expense",
            img: "/assets/productsPhotos/last-expense.png",
            desc: "Our last expense/funeral expense cover pays a specified cash amount within 48 hours of notification of death."
        },
        {
            title: "Medical",
            img: "/assets/productsPhotos/medical.png",
            desc: "Our medical insurance products include inpatient (With In-built Maternity), Outpatient, Dental, and Optical."
        },
        {
            title: "Hospital Cash",
            img: "/assets/productsPhotos/hospital-cash.png",
            desc: "Daily payments for insureds admitted in hospital for up to a maximum of 10 payments per year or admission."
        },
        {
            title: "Personal Accident",
            img: "/assets/productsPhotos/personal-accident.png",
            desc: "Plan provides fixed sum payout on death, permanent disablement, and medical expenses arising because of an accident."
        },
        {
            title: "Motorbike/Bodaboda Insurance Application",
            img: "/assets/productsPhotos/motorbike.jpg",
            desc: "Covers your motorbike against damage, theft, or loss, including third-party liability."
        },
        {
            title: "TukuTuk Insurance Application",
            img: "/assets/productsPhotos/tuktuk.png",
            desc: "This insurance offers both Third Party and Comprehensive cover—protecting against damage or loss, third party liability."
        },
        {
            title: "Probation Guard",
            img: "/assets/productsPhotos/prob_guard.png",
            desc: "This enhancement to our existing Evacuation and Repatriation Cover includes a new component."
        },
        {
            title: "AQUABIMA Insurance",
            img: "/assets/productsPhotos/aqua_culture.jpeg",
            desc: "AQUABIMA is a tailored insurance solution for cage and pond farmers, ensuring guaranteed returns on investment."
        }
    ];
    const testimonials = [
        {
            name: "Alice Mwangi",
            role: "Software Engineer",
            avatar: "/assets/managementPhotos/Ann-Kinyanjui.png",
            text: "Birdview Insurance made choosing the right plan incredibly easy. Highly recommend!"
        },
        {
            name: "John Kamau",
            role: "Business Owner",
            avatar: "/assets/managementPhotos/Richard-Muiru.png",
            text: "Fast, reliable, and trustworthy. Their coverage saved us during an unexpected event."
        },
        {
            name: "Grace Njeri",
            role: "Freelancer",
            avatar: "/assets/managementPhotos/Mary-Mundia.png",
            text: "Excellent customer service and flexible plans that fit my needs perfectly."
        }
    ];
    const benefits = [
        {
            title: "Fast Claims",
            icon: "/icons/fast.svg",
            desc: "Quick and hassle-free claim processing."
        },
        {
            title: "Trusted Partner",
            icon: "/icons/trusted.svg",
            desc: "Over 20 years of experience and reliability."
        },
        {
            title: "24/7 Support",
            icon: "/icons/support.svg",
            desc: "We’re here for you anytime, anywhere."
        },
        {
            title: "Tailored Plans",
            icon: "/icons/tailored.svg",
            desc: "Custom insurance plans that fit your life."
        },
        {
            title: "Global Coverage",
            icon: "/icons/global.svg",
            desc: "Insurance solutions that protect you worldwide."
        },
        {
            title: "Affordable Premiums",
            icon: "/icons/affordable.svg",
            desc: "Comprehensive protection at competitive rates."
        }
    ];
    const faqs = [
        {
            q: "What types of insurance do you offer?",
            a: "We provide comprehensive coverage including Health, Auto, Life, Property, Travel, and Business Insurance. Each plan is customizable to suit individual or corporate needs."
        },
        {
            q: "How can I get a quote?",
            a: "You can easily request a free online quote through our website, or schedule a call with one of our licensed agents for a personalized consultation."
        },
        {
            q: "Do you cover businesses?",
            a: "Yes, we offer tailored solutions for businesses of all sizes, including liability, employee health, fleet, and property insurance packages."
        },
        {
            q: "Are your plans flexible?",
            a: "Absolutely. We provide flexible options and add-ons so that your coverage grows with your needs, ensuring you're always protected."
        },
        {
            q: "How do I file a claim?",
            a: "You can file a claim directly on our website, through our mobile app, or by contacting our 24/7 customer support team. Claims are processed promptly with full transparency."
        },
        {
            q: "Do you offer international coverage?",
            a: "Yes. For frequent travelers and expatriates, we provide global coverage options that ensure you’re protected anywhere in the world."
        },
        {
            q: "Is there a dedicated support team?",
            a: "Yes, we have a 24/7 dedicated support team available via phone, email, and live chat to assist you with inquiries, claims, or policy updates."
        }
    ];
    const partners = [
        {
            name: "AXA",
            logo: "/partners/axa.png"
        },
        {
            name: "Allianz",
            logo: "/partners/allianz.png"
        },
        {
            name: "Prudential",
            logo: "/partners/prudential.png"
        },
        {
            name: "MetLife",
            logo: "/partners/metlife.png"
        },
        {
            name: "AIG",
            logo: "/partners/aig.png"
        }
    ];
    const [showAllProducts, setShowAllProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTestimonial, setCurrentTestimonial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Animate products sequentially
    const productVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: (i)=>({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * 0.15
                }
            })
    };
    // Cycle testimonials every 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    setCurrentTestimonial({
                        "Home.useEffect.interval": (prev)=>(prev + 1) % testimonials.length
                    }["Home.useEffect.interval"]);
                }
            }["Home.useEffect.interval"], 5000);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const [previewLength, setPreviewLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(80);
    // Adjust preview length based on screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const updateLength = {
                "Home.useEffect.updateLength": ()=>{
                    if (window.innerWidth < 640) {
                        setPreviewLength(50); // mobile
                    } else if (window.innerWidth < 1024) {
                        setPreviewLength(80); // tablet
                    } else {
                        setPreviewLength(120); // desktop
                    }
                }
            }["Home.useEffect.updateLength"];
            updateLength();
            window.addEventListener("resize", updateLength);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("resize", updateLength)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col gap-16 w-full overflow-visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full min-h-screen bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: "url('/images/hero-bg.png')"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-blue-600/80 via-black/40 to-red-600/80"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 1
                                },
                                className: "text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-5xl",
                                children: [
                                    "Exceeding ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-400",
                                        children: "Your Expectations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.3,
                                    duration: 1
                                },
                                className: "mt-6 text-gray-200 md:text-lg max-w-3xl",
                                children: "Affordable and reliable micro insurance solutions, built to protect individuals, families, and small businesses. Coverage that grows with your needs — simple, transparent, and accessible."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.6,
                                    duration: 1
                                },
                                className: "flex gap-4 mt-8 flex-wrap justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].links.getQuote || "#",
                                        className: "relative px-6 py-3 rounded-full text-white font-semibold bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-500 shadow-lg",
                                        children: "Get Covered Today"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].links.services || "#",
                                        className: "relative px-6 py-3 rounded-full text-white font-semibold bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-500 shadow-lg",
                                        children: "Explore Plans"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                shadow: "lg",
                radius: "xl",
                className: "w-full relative overflow-visible  bg-gradient-to-br from-primary/95 via-primary/80 to-danger/90  text-white rounded-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 -z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-danger/80"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[-6rem] left-[-6rem] w-[20rem] h-[20rem] bg-primary/40 rounded-full blur-3xl opacity-50 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[-6rem] right-[-6rem] w-[22rem] h-[22rem] bg-danger/40 rounded-full blur-3xl opacity-50 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay",
                                style: {
                                    backgroundImage: "url('/images/premium-bg.jpg')"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full h-32 md:h-40 -z-10 opacity-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 1440 320",
                            className: "w-full h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "white",
                                fillOpacity: "0.3",
                                d: "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,176C960,160,1056,160,1152,165.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                        className: "text-3xl md:text-4xl font-bold text-center text-white mb-10 relative z-10 drop-shadow-lg",
                        children: "Our Insurance Products"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10",
                        children: (showAllProducts ? allProducts : allProducts.slice(0, 4)).map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                custom: i,
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true
                                },
                                variants: productVariants,
                                whileHover: {
                                    scale: 1.07
                                },
                                className: "cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                                    shadow: "sm",
                                    radius: "lg",
                                    className: "relative overflow-hidden  bg-white/10 backdrop-blur-xl  border border-white/20  hover:shadow-2xl transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-lg pointer-events-none opacity-50",
                                            style: {
                                                background: "linear-gradient(135deg, rgba(var(--tw-primary-rgb),0.25), rgba(var(--tw-danger-rgb),0.25))"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: product.img,
                                            alt: product.title,
                                            width: 600,
                                            height: 400,
                                            className: "rounded-t-lg object-cover h-48 w-full relative z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                            className: "text-xl font-semibold text-white px-4 pt-4 relative z-10 drop-shadow-md",
                                            children: product.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                            className: "text-gray-200 px-4 pb-6 relative z-10",
                                            children: product.desc
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mt-6 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAllProducts(!showAllProducts),
                            className: "flex items-center gap-2 px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-primary shadow-lg backdrop-blur-md transition-all",
                            children: [
                                showAllProducts ? "Show Less" : "Show More",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 transform transition-transform duration-300 ".concat(showAllProducts ? "rotate-180" : ""),
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M19 9l-7 7-7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 369,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                shadow: "lg",
                radius: "xl",
                className: "w-full relative overflow-hidden py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/backdrop1.jpg",
                                alt: "Corporate backdrop",
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-primary/80 via-black/60 to-danger/80 mix-blend-multiply"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                        className: "text-4xl md:text-5xl font-bold text-center text-white mb-14 relative z-10 tracking-tight",
                        children: "What Our Clients Say"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                        className: "relative z-10 max-w-4xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: testimonials.map((t, i)=>i === currentTestimonial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    },
                                    className: "flex flex-col items-center gap-6 text-center px-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-6xl text-white/40 font-serif",
                                            children: "“"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white text-xl md:text-2xl leading-relaxed font-light italic max-w-3xl",
                                            children: t.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: t.avatar,
                                                    alt: t.name,
                                                    width: 180,
                                                    height: 180,
                                                    className: "rounded-full object-cover shadow-lg border-4 border-white/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 font-semibold text-lg text-white",
                                                    children: t.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-white/70 tracking-wide uppercase",
                                                    children: t.role
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 21
                                        }, this),
                                        t.companyLogo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: t.companyLogo,
                                            alt: "".concat(t.name, " company"),
                                            width: 140,
                                            height: 50,
                                            className: "mt-4 object-contain opacity-80 invert"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 449,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, t.name, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 416,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                shadow: "lg",
                radius: "xl",
                className: "relative w-full py-20 overflow-hidden border-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/partner.png",
                                alt: "Global Background",
                                fill: true,
                                className: "object-cover opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-primary/90 via-black/80 to-danger/90 backdrop-blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                className: "text-3xl md:text-4xl font-bold text-center text-white drop-shadow mb-16",
                                children: "Why Choose Birdview Insurance"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 483,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8",
                                    children: benefits.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg transition hover:scale-105 h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: item.icon,
                                                    alt: item.title,
                                                    width: 64,
                                                    height: 64,
                                                    className: "drop-shadow-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80 text-sm",
                                                    children: item.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                shadow: "lg",
                radius: "xl",
                className: "w-full relative overflow-hidden py-20 px-6 md:px-12 border border-white/20",
                style: {
                    backgroundImage: "url('/images/partner.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 522,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-6xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        initial: {
                                            opacity: 0,
                                            y: 40
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.6
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "text-3xl md:text-5xl font-extrabold text-white",
                                        children: "Trusted by Global Industry Leaders"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 mt-4 text-lg max-w-2xl mx-auto",
                                        children: [
                                            "We partner with the world’s most respected insurers to deliver",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-danger font-semibold",
                                                children: " secure, reliable,"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            "and ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-danger font-semibold",
                                                children: "customer-first"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 538,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            "solutions across industries."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center",
                                children: partners.map((partner, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: i * 0.1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: partner.logo,
                                            alt: partner.name,
                                            width: 140,
                                            height: 60,
                                            className: "grayscale hover:grayscale-0 transition duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 552,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 544,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 542,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gradient-to-r from-primary to-violet py-24 text-center text-white relative z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-5xl font-bold mb-6",
                        children: "Ready to Protect What Matters Most?"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 567,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-xl mb-8",
                        children: "Get your personalized insurance quote in minutes."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 570,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-6 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].links.getQuote || "https://quote.birdviewinsurance.com/",
                                className: "px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 transition",
                                children: "Get a Quote"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 574,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$link$2f$dist$2f$chunk$2d$JOT4BT4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].links.contact || "#",
                                className: "px-8 py-4 rounded-full bg-danger text-white font-semibold shadow-lg hover:bg-danger/90 transition",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                shadow: "lg",
                radius: "xl",
                className: "relative overflow-hidden w-full text-white py-20 px-6 md:px-12 border border-white/20",
                style: {
                    backgroundImage: "url('/images/stats.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 backdrop-blur-md"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 601,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-6xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6
                                },
                                viewport: {
                                    once: true
                                },
                                className: "text-3xl md:text-5xl font-extrabold text-center mb-12",
                                children: "Our Growth in Numbers"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 604,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        ...stat
                                    }, idx, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 614,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 590,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                shadow: "lg",
                radius: "lg",
                className: "w-full bg-primary text-white py-16 px-6 md:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                        className: "text-3xl md:text-4xl font-extrabold text-center text-white mb-12",
                        children: "Frequently Asked Questions"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 629,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true
                        },
                        variants: {
                            hidden: {
                                opacity: 0
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        },
                        className: "max-w-3xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$P43IVKP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__["Accordion"], {
                            variant: "splitted",
                            className: "rounded-xl overflow-hidden",
                            itemClasses: {
                                base: "rounded-xl overflow-hidden group relative",
                                trigger: "px-6 py-4 transition-colors",
                                content: "px-6 pb-4 text-sm"
                            },
                            children: faqs.map((faq, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                                    "aria-label": faq.q,
                                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: " font-bold  group-data-[open=false]:text-black  group-data-[open=true]:text-white ",
                                        children: faq.q
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 665,
                                        columnNumber: 19
                                    }, void 0),
                                    className: "\n        group relative\n        [&[data-open='true']]:bg-danger\n        [&[data-open='false']]:bg-primary\n        transition-all duration-500\n      ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 5
                                            },
                                            animate: {
                                                opacity: 0,
                                                y: 5
                                            },
                                            whileInView: {
                                                opacity: 0,
                                                y: 5
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            className: " absolute left-1/2 -translate-x-1/2 -top-12 px-3 py-2  bg-black text-white text-xs rounded-lg shadow-lg max-w-[250px] sm:max-w-[300px] md:max-w-[400px] text-center z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ",
                                            children: faq.a.length > 80 ? faq.a.substring(0, 80) + "..." : faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 683,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            initial: {
                                                opacity: 0,
                                                y: -10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.4
                                            },
                                            className: "text-white",
                                            children: faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 661,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 651,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 638,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 623,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_s1(Home, "UmyC9iX8+6H+1wSSnhnUhR8cDN4=");
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d2fec8aa._.js.map