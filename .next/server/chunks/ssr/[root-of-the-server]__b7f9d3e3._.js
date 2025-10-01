module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/components/AnimateNumber.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$web$2f$dist$2f$react$2d$spring_web$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const AnimatedNumber = ({ value, prefix = "", colorClass = "text-white" })=>{
    const { number } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$web$2f$dist$2f$react$2d$spring_web$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animated"].span, {
        className: `font-semibold text-black md:${colorClass}`,
        children: number.to((n)=>`${prefix}${n.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`)
    }, void 0, false, {
        fileName: "[project]/components/AnimateNumber.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AnimatedNumber;
}),
"[project]/app/products/personal_accident/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
// HeroUI imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs [app-ssr] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-S6VICFMP.mjs [app-ssr] (ecmascript) <export table_default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-YRZGWF2W.mjs [app-ssr] (ecmascript) <export table_header_default as TableHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-TSPNSPCL.mjs [app-ssr] (ecmascript) <export table_column_default as TableColumn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-FKPXBCGS.mjs [app-ssr] (ecmascript) <export table_body_default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-CIL4Y7FA.mjs [app-ssr] (ecmascript) <export table_row_default as TableRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-F3UDT23P.mjs [app-ssr] (ecmascript) <export table_cell_default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$select$2f$dist$2f$chunk$2d$Y2AYO5NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__select_default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/select/dist/chunk-Y2AYO5NJ.mjs [app-ssr] (ecmascript) <export select_default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$listbox$2f$dist$2f$chunk$2d$BJFJ4DRR$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__SelectItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/listbox/dist/chunk-BJFJ4DRR.mjs [app-ssr] (ecmascript) <export listbox_item_base_default as SelectItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/ShieldCheckIcon.js [app-ssr] (ecmascript) <export default as ShieldCheckIcon>");
// AnimatedNumber from your components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AnimateNumber.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const PersonalAccident = ()=>{
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("KES");
    const [exchangeRates, setExchangeRates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loadingRates, setLoadingRates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const currencySymbols = {
        USD: "$",
        KES: "KSh",
        EUR: "€",
        GBP: "£"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchExchangeRates = async ()=>{
            try {
                setLoadingRates(true);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("https://snownet-customer-quotation-server.onrender.com/api/underwriting/quotation/onlineQuotation/products/exchangeRate/");
                const ratesArray = response.data?.data || [];
                const ratesMap = {};
                for (let item of ratesArray){
                    if (item.currency && item.x_rate) {
                        ratesMap[item.currency] = parseFloat(item.x_rate);
                    }
                }
                setExchangeRates(ratesMap);
            } catch (error) {
                console.error("❌ Failed to fetch exchange rates:", error);
            } finally{
                setLoadingRates(false);
            }
        };
        fetchExchangeRates();
    }, []);
    const convertPremiumValue = (amount)=>{
        const rate = exchangeRates[currency] || 1;
        return Number(amount) * rate;
    };
    const handleClickPersonalAccident = ()=>{
        window.location.href = "https://quote.birdviewinsurance.com/?ProductID=5";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    className: "text-center max-w-4xl mx-auto mb-16 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-700 via-blue-600 to-red-600 bg-clip-text text-transparent",
                            children: "Personal Accident Insurance"
                        }, void 0, false, {
                            fileName: "[project]/app/products/personal_accident/page.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed",
                            children: [
                                "Because life is unpredictable,",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-gray-900",
                                    children: "we make sure your future isn’t."
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Our ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-indigo-600 font-semibold",
                                    children: "Personal Accident Cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                "provides financial protection when you and your loved ones need it most — offering ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "lump-sum payouts"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 34
                                }, ("TURBOPACK compile-time value", void 0)),
                                " in case of",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "accidental death"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                ",",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "permanent disability"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                ", or",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "unexpected medical expenses"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/personal_accident/page.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 text-lg md:text-xl text-gray-600",
                            children: [
                                "Choose cover limits from",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-indigo-700",
                                    children: "KSh. 50,000"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                " to",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-indigo-700",
                                    children: "KSh. 500,000"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                ", backed by a trusted insurer. Protect your lifestyle, safeguard your family, and enjoy true peace of mind — today and tomorrow."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/personal_accident/page.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/personal_accident/page.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative inline-block rounded-2xl bg-white shadow-lg p-[2px]    bg-gradient-to-r from-indigo-600 via-blue-500 to-red-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-white px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2 text-center",
                                    children: "Select Currency"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$select$2f$dist$2f$chunk$2d$Y2AYO5NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__select_default__as__Select$3e$__["Select"], {
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
                                    children: Object.keys(currencySymbols).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$listbox$2f$dist$2f$chunk$2d$BJFJ4DRR$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__SelectItem$3e$__["SelectItem"], {
                                            className: "font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700",
                                            children: c
                                        }, c, false, {
                                            fileName: "[project]/app/products/personal_accident/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/personal_accident/page.tsx",
                            lineNumber: 123,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/products/personal_accident/page.tsx",
                        lineNumber: 121,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/products/personal_accident/page.tsx",
                    lineNumber: 114,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    className: "rounded-2xl shadow-xl mb-12 overflow-x-auto bg-gradient-to-r from-indigo-600 via-blue-600 to-red-600 p-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
                        "aria-label": "Personal Accident Plans",
                        removeWrapper: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                                className: "bg-transparent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                        className: "text-center text-white font-semibold bg-transparent",
                                        children: "Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/personal_accident/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                        className: "text-center text-white font-semibold bg-transparent",
                                        children: "Main Benefit Covered"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/personal_accident/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                        className: "text-center text-white font-semibold bg-transparent",
                                        children: "Premium per Person"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/personal_accident/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/products/personal_accident/page.tsx",
                                lineNumber: 163,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                                children: [
                                    {
                                        plan: "Plan 1",
                                        limit: 50000,
                                        premium: 500
                                    },
                                    {
                                        plan: "Plan 2",
                                        limit: 100000,
                                        premium: 1000
                                    },
                                    {
                                        plan: "Plan 3",
                                        limit: 200000,
                                        premium: 1340
                                    },
                                    {
                                        plan: "Plan 4",
                                        limit: 250000,
                                        premium: 1670
                                    },
                                    {
                                        plan: "Plan 5",
                                        limit: 300000,
                                        premium: 2000
                                    },
                                    {
                                        plan: "Plan 6",
                                        limit: 500000,
                                        premium: 2500
                                    }
                                ].map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                                        className: "hover:bg-white/10 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                className: "text-center font-medium text-white",
                                                children: row.plan
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/personal_accident/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                className: "text-center font-bold text-yellow-200",
                                                children: [
                                                    currencySymbols[currency],
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        value: convertPremiumValue(row.limit)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/personal_accident/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/personal_accident/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                className: "text-center font-bold text-green-300",
                                                children: [
                                                    currencySymbols[currency],
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        value: convertPremiumValue(row.premium)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/personal_accident/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/personal_accident/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/products/personal_accident/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/products/personal_accident/page.tsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/personal_accident/page.tsx",
                        lineNumber: 162,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/products/personal_accident/page.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 60
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.7
                    },
                    viewport: {
                        once: true
                    },
                    className: "relative mt-20 rounded-3xl bg-gradient-to-r from-amber-500 via-red-500 to-pink-600 shadow-2xl overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/20 backdrop-blur-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/products/personal_accident/page.tsx",
                            lineNumber: 213,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative px-8 md:px-16 py-16 text-center text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h3, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.2
                                    },
                                    className: "text-4xl md:text-5xl font-extrabold mb-6",
                                    children: "Stay Protected When Life Takes the Unexpected Turn"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-8",
                                    children: [
                                        "Accidents happen when you least expect them. With our",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Personal Accident Insurance"
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/personal_accident/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ", you safeguard not only your health — but also your family’s financial future. From medical expenses to income protection, we’ve got you covered."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0.9,
                                        opacity: 0
                                    },
                                    whileInView: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.4
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                        size: "lg",
                                        radius: "full",
                                        className: "bg-white text-red-600 font-bold px-8 py-6 shadow-lg hover:scale-105 transition-transform",
                                        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__["ShieldCheckIcon"], {
                                            className: "h-6 w-6 text-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/personal_accident/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 47
                                        }, void 0),
                                        onClick: handleClickPersonalAccident,
                                        children: [
                                            "Protect My Future Today",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/products/personal_accident/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 56
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-normal",
                                                children: "(Get a Quote in Minutes)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/personal_accident/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/products/personal_accident/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/products/personal_accident/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/personal_accident/page.tsx",
                            lineNumber: 215,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/personal_accident/page.tsx",
                    lineNumber: 206,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/products/personal_accident/page.tsx",
            lineNumber: 78,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/products/personal_accident/page.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PersonalAccident;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b7f9d3e3._.js.map