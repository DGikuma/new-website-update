(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AnimateNumber.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$web$2f$dist$2f$react$2d$spring_web$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const AnimatedNumber = (param)=>{
    let { value, prefix = "", colorClass = "text-white" } = param;
    _s();
    const { number } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])({
        from: {
            number: 0
        },
        to: {
            number: value
        },
        config: {
            duration: 600
        },
        reset: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$web$2f$dist$2f$react$2d$spring_web$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animated"].span, {
        className: "font-semibold text-black md:".concat(colorClass),
        children: number.to((n)=>"".concat(prefix).concat(n.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })))
    }, void 0, false, {
        fileName: "[project]/components/AnimateNumber.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedNumber, "lbTFvdPv+5w0Qy3bSt2L0cLnovg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = AnimatedNumber;
const __TURBOPACK__default__export__ = AnimatedNumber;
var _c;
__turbopack_context__.k.register(_c, "AnimatedNumber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/products/medical/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-S6VICFMP.mjs [app-client] (ecmascript) <export table_default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-YRZGWF2W.mjs [app-client] (ecmascript) <export table_header_default as TableHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-TSPNSPCL.mjs [app-client] (ecmascript) <export table_column_default as TableColumn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-FKPXBCGS.mjs [app-client] (ecmascript) <export table_body_default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-CIL4Y7FA.mjs [app-client] (ecmascript) <export table_row_default as TableRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-F3UDT23P.mjs [app-client] (ecmascript) <export table_cell_default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$select$2f$dist$2f$chunk$2d$Y2AYO5NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__select_default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/select/dist/chunk-Y2AYO5NJ.mjs [app-client] (ecmascript) <export select_default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$listbox$2f$dist$2f$chunk$2d$BJFJ4DRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__SelectItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/listbox/dist/chunk-BJFJ4DRR.mjs [app-client] (ecmascript) <export listbox_item_base_default as SelectItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$HV4PHP4I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/tabs/dist/chunk-HV4PHP4I.mjs [app-client] (ecmascript) <export tabs_default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$ML27DD5T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/tabs/dist/chunk-ML27DD5T.mjs [app-client] (ecmascript) <export tab_item_base_default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AnimateNumber.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Medical = ()=>{
    _s();
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("KES");
    const [exchangeRates, setExchangeRates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const currencySymbols = {
        KES: "KSh",
        USD: "$",
        EUR: "€",
        GBP: "£"
    };
    const gradientClass = "bg-gradient-to-r from-indigo-600 via-blue-600 to-red-600";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Medical.useEffect": ()=>{
            const fetchExchangeRates = {
                "Medical.useEffect.fetchExchangeRates": async ()=>{
                    try {
                        var _response_data;
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://snownet-customer-quotation-server.onrender.com/api/underwriting/quotation/onlineQuotation/products/exchangeRate/");
                        const ratesArray = ((_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.data) || [];
                        const ratesMap = {};
                        for (let item of ratesArray){
                            if (item.currency && item.x_rate) {
                                ratesMap[item.currency] = parseFloat(item.x_rate);
                            }
                        }
                        setExchangeRates(ratesMap);
                    } catch (error) {
                        console.error("❌ Failed to fetch exchange rates:", error);
                    }
                }
            }["Medical.useEffect.fetchExchangeRates"];
            fetchExchangeRates();
        }
    }["Medical.useEffect"], []);
    const handleClickMedical = ()=>{
        window.location.href = "https://quote.birdviewinsurance.com/?ProductID=3";
    };
    /** ---- Sample Data (expand with your real data) ---- **/ const inpatientBreakdown = [
        {
            benefit: "Ward Bed",
            limit: "Full Refund"
        },
        {
            benefit: "ICU",
            limit: "Full Refund"
        },
        {
            benefit: "Maternity",
            limit: "50,000"
        },
        {
            benefit: "Major Surgery",
            limit: "Full Refund"
        },
        {
            benefit: "Cancer Treatment",
            limit: "Full Refund"
        }
    ];
    const inpatientPremiums = [
        {
            plan: "Plan A",
            premium: "10,000"
        },
        {
            plan: "Plan B",
            premium: "20,000"
        }
    ];
    const outpatientBreakdown = [
        {
            benefit: "Consultations",
            limit: "Full Refund"
        },
        {
            benefit: "Diagnostics",
            limit: "Full Refund"
        },
        {
            benefit: "Drugs",
            limit: "Full Refund"
        },
        {
            benefit: "Physiotherapy",
            limit: "Full Refund"
        }
    ];
    const outpatientPremiums = [
        {
            plan: "Plan A",
            premium: "5,000"
        },
        {
            plan: "Plan B",
            premium: "12,000"
        }
    ];
    const dentalBreakdown = [
        {
            benefit: "Consultation",
            limit: "Full Refund"
        },
        {
            benefit: "Scaling",
            limit: "Full Refund"
        },
        {
            benefit: "Fillings",
            limit: "Full Refund"
        },
        {
            benefit: "X-rays",
            limit: "Full Refund"
        }
    ];
    const dentalPremiums = [
        {
            plan: "Plan A",
            premium: "3,000"
        },
        {
            plan: "Plan B",
            premium: "8,000"
        }
    ];
    const opticalBreakdown = [
        {
            benefit: "Eye Exams",
            limit: "Full Refund"
        },
        {
            benefit: "Frames",
            limit: "15,000"
        },
        {
            benefit: "Lenses",
            limit: "15,000"
        },
        {
            benefit: "Contact Lenses",
            limit: "15,000"
        }
    ];
    const opticalPremiums = [
        {
            plan: "Plan A",
            premium: "4,000"
        },
        {
            plan: "Plan B",
            premium: "9,000"
        }
    ];
    /** ---- Corporate Tab Styling ---- **/ const tabClasses = {
        tabList: "border-b border-gray-200",
        cursor: "bg-gradient-to-r from-indigo-600 via-blue-600 to-red-600 h-[3px] rounded-full",
        tab: "px-6 py-3 text-lg font-medium text-gray-600 hover:text-gray-900 transition",
        tabContent: "group-data-[selected=true]:font-bold group-data-[selected=true]:text-gray-900"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    className: "text-center max-w-4xl mx-auto mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-700 via-blue-600 to-red-600 bg-clip-text text-transparent",
                            children: "Comprehensive Medical Insurance"
                        }, void 0, false, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-8 text-lg md:text-xl text-gray-700 leading-relaxed",
                            children: [
                                "Protect your family’s health with",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-gray-900",
                                    children: "tailored medical plans"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                "— covering inpatient, outpatient, dental and optical. Corporate-grade care backed by trusted providers."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/medical/page.tsx",
                    lineNumber: 124,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
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
                    className: "flex justify-center mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative inline-block rounded-2xl bg-white shadow-lg p-[2px] bg-gradient-to-r from-indigo-600 via-blue-500 to-red-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-white px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2 text-center",
                                    children: "Select Currency"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$select$2f$dist$2f$chunk$2d$Y2AYO5NJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__select_default__as__Select$3e$__["Select"], {
                                    selectedKeys: [
                                        currency
                                    ],
                                    onSelectionChange: (keys)=>setCurrency(Array.from(keys)[0]),
                                    "aria-label": "Select Currency",
                                    className: "w-48 font-semibold text-gray-800",
                                    radius: "lg",
                                    variant: "bordered",
                                    classNames: {
                                        trigger: "bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm hover:shadow-md transition-all",
                                        value: "text-lg font-bold text-indigo-700",
                                        popoverContent: "bg-white shadow-xl rounded-xl border border-gray-200"
                                    },
                                    children: Object.keys(currencySymbols).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$listbox$2f$dist$2f$chunk$2d$BJFJ4DRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__SelectItem$3e$__["SelectItem"], {
                                            className: "font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700",
                                            children: c
                                        }, c, false, {
                                            fileName: "[project]/app/products/medical/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 153,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/products/medical/page.tsx",
                        lineNumber: 152,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/products/medical/page.tsx",
                    lineNumber: 145,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-bold text-gray-900 mb-6",
                                    children: "Inpatient"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$HV4PHP4I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__["Tabs"], {
                                    "aria-label": "Inpatient Cover",
                                    variant: "underlined",
                                    classNames: tabClasses,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$ML27DD5T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                            title: "Breakdown",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
                                                removeWrapper: true,
                                                className: "rounded-2xl shadow-xl overflow-x-auto p-1 ".concat(gradientClass),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                                                        className: "bg-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Benefit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Limit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                                                        children: inpatientBreakdown.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center",
                                                                        children: row.benefit
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center font-bold",
                                                                        children: row.limit
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/medical/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, "breakdown", false, {
                                            fileName: "[project]/app/products/medical/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$ML27DD5T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                            title: "Premiums",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
                                                removeWrapper: true,
                                                className: "rounded-2xl shadow-xl overflow-x-auto p-1 ".concat(gradientClass),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                                                        className: "bg-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Plan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Premium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                                                        children: inpatientPremiums.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center",
                                                                        children: row.plan
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 245,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center font-bold",
                                                                        children: row.premium
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 248,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/medical/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, "premium", false, {
                                            fileName: "[project]/app/products/medical/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 190,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-bold text-gray-900 mb-6",
                                    children: "Outpatient"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$HV4PHP4I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__["Tabs"], {
                                    "aria-label": "Outpatient Cover",
                                    variant: "underlined",
                                    classNames: tabClasses,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$ML27DD5T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                            title: "Breakdown",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
                                                removeWrapper: true,
                                                className: "rounded-2xl shadow-xl overflow-x-auto p-1 ".concat(gradientClass),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                                                        className: "bg-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Benefit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Limit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                                                        children: outpatientBreakdown.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center",
                                                                        children: row.benefit
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center font-bold",
                                                                        children: row.limit
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 291,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/medical/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, "breakdown", false, {
                                            fileName: "[project]/app/products/medical/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$ML27DD5T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                            title: "Premiums",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
                                                removeWrapper: true,
                                                className: "rounded-2xl shadow-xl overflow-x-auto p-1 ".concat(gradientClass),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                                                        className: "bg-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Plan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Premium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                                                        children: outpatientPremiums.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center",
                                                                        children: row.plan
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center font-bold",
                                                                        children: row.premium
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 318,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/medical/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, "premium", false, {
                                            fileName: "[project]/app/products/medical/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 260,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-bold text-gray-900 mb-6",
                                    children: "Dental"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$HV4PHP4I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__["Tabs"], {
                                    "aria-label": "Dental Cover",
                                    variant: "underlined",
                                    classNames: tabClasses,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$ML27DD5T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                            title: "Breakdown",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
                                                removeWrapper: true,
                                                className: "rounded-2xl shadow-xl overflow-x-auto p-1 ".concat(gradientClass),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                                                        className: "bg-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Benefit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Limit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                                                        children: dentalBreakdown.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center",
                                                                        children: row.benefit
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center font-bold",
                                                                        children: row.limit
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 361,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/medical/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, "breakdown", false, {
                                            fileName: "[project]/app/products/medical/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$ML27DD5T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                            title: "Premiums",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
                                                removeWrapper: true,
                                                className: "rounded-2xl shadow-xl overflow-x-auto p-1 ".concat(gradientClass),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                                                        className: "bg-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Plan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Premium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                                                        children: dentalPremiums.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center",
                                                                        children: row.plan
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 385,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center font-bold",
                                                                        children: row.premium
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 388,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/medical/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, "premium", false, {
                                            fileName: "[project]/app/products/medical/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 337,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 330,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.3
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-bold text-gray-900 mb-6",
                                    children: "Optical"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 406,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$HV4PHP4I$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tabs_default__as__Tabs$3e$__["Tabs"], {
                                    "aria-label": "Optical Cover",
                                    variant: "underlined",
                                    classNames: tabClasses,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$ML27DD5T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                            title: "Breakdown",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
                                                removeWrapper: true,
                                                className: "rounded-2xl shadow-xl overflow-x-auto p-1 ".concat(gradientClass),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                                                        className: "bg-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Benefit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Limit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                                                        children: opticalBreakdown.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center",
                                                                        children: row.benefit
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center font-bold",
                                                                        children: row.limit
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 431,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/medical/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, "breakdown", false, {
                                            fileName: "[project]/app/products/medical/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$tabs$2f$dist$2f$chunk$2d$ML27DD5T$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tab_item_base_default__as__Tab$3e$__["Tab"], {
                                            title: "Premiums",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
                                                removeWrapper: true,
                                                className: "rounded-2xl shadow-xl overflow-x-auto p-1 ".concat(gradientClass),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                                                        className: "bg-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Plan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "text-white text-center font-semibold",
                                                                children: "Premium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                                                        children: opticalPremiums.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center",
                                                                        children: row.plan
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 455,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-white text-center font-bold",
                                                                        children: row.premium
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                                        lineNumber: 458,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/products/medical/page.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/medical/page.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/medical/page.tsx",
                                                lineNumber: 440,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, "premium", false, {
                                            fileName: "[project]/app/products/medical/page.tsx",
                                            lineNumber: 439,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 400,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/medical/page.tsx",
                    lineNumber: 188,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9
                    },
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.3
                    },
                    viewport: {
                        once: true
                    },
                    className: "bg-gradient-to-r from-indigo-700 via-blue-600 to-red-600 rounded-3xl p-12 text-center shadow-2xl mt-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl md:text-4xl font-bold text-white mb-6",
                            children: "Take Control of Your Health Today"
                        }, void 0, false, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 478,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-100 max-w-3xl mx-auto mb-10",
                            children: [
                                "Get access to world-class hospitals, doctors, and emergency support.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-yellow-200",
                                    children: [
                                        " ",
                                        "From maternity to critical care"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 483,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                ", our Medical Cover gives you total peace of mind."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 481,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    size: "lg",
                                    className: "bg-white text-indigo-700 font-semibold px-8 shadow-md hover:scale-105 transition",
                                    onClick: handleClickMedical,
                                    children: "Get a Quote"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 490,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    size: "lg",
                                    className: "bg-red-600 text-white font-semibold px-8 shadow-md hover:bg-red-700 transition",
                                    onClick: ()=>window.location.href = "tel:+254742222888",
                                    children: "Call Emergency Line"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 497,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    size: "lg",
                                    className: "bg-blue-600 text-white font-semibold px-8 shadow-md hover:bg-blue-700 transition",
                                    onClick: ()=>window.location.href = "/BIRDVIEW_LIST_OF_PROVIDERS_2025.pdf",
                                    children: "Download Providers List"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/medical/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 489,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/medical/page.tsx",
                    lineNumber: 471,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.2
                    },
                    viewport: {
                        once: true
                    },
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto text-center mt-20",
                    children: [
                        {
                            label: "Claims Processed",
                            value: 120000,
                            color: "text-yellow-400"
                        },
                        {
                            label: "Partner Hospitals",
                            value: 350,
                            color: "text-green-400"
                        },
                        {
                            label: "Families Protected",
                            value: 50000,
                            color: "text-blue-400"
                        }
                    ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                            className: "rounded-2xl shadow-lg bg-white hover:shadow-xl transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                className: "p-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-4xl md:text-5xl font-extrabold ".concat(stat.color, " mb-4"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                value: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/medical/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "+"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/products/medical/page.tsx",
                                        lineNumber: 534,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold text-gray-700",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/medical/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/products/medical/page.tsx",
                                lineNumber: 533,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, i, false, {
                            fileName: "[project]/app/products/medical/page.tsx",
                            lineNumber: 529,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/products/medical/page.tsx",
                    lineNumber: 517,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/products/medical/page.tsx",
            lineNumber: 122,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/products/medical/page.tsx",
        lineNumber: 121,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Medical, "dbK6w7QDWnsfJhSXmhcQ6pa8n4I=");
_c = Medical;
const __TURBOPACK__default__export__ = Medical;
var _c;
__turbopack_context__.k.register(_c, "Medical");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_29cf372f._.js.map