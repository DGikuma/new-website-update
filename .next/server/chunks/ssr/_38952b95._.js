module.exports = [
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
const AnimatedNumber = ({ value, prefix = "", colorClass = "text-primary" })=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `font-semibold ${colorClass}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$web$2f$dist$2f$react$2d$spring_web$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animated"].span, {
            children: number.to((n)=>`${prefix} ${n.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`)
        }, void 0, false, {
            fileName: "[project]/components/AnimateNumber.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/AnimateNumber.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AnimatedNumber;
}),
"[project]/app/products/evacuation_and_repatriation/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'axios'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs [app-ssr] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$select$2f$dist$2f$chunk$2d$Y2AYO5NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__select_default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/select/dist/chunk-Y2AYO5NJ.mjs [app-ssr] (ecmascript) <export select_default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$listbox$2f$dist$2f$chunk$2d$BJFJ4DRR$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__SelectItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/listbox/dist/chunk-BJFJ4DRR.mjs [app-ssr] (ecmascript) <export listbox_item_base_default as SelectItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-S6VICFMP.mjs [app-ssr] (ecmascript) <export table_default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-YRZGWF2W.mjs [app-ssr] (ecmascript) <export table_header_default as TableHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-TSPNSPCL.mjs [app-ssr] (ecmascript) <export table_column_default as TableColumn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-FKPXBCGS.mjs [app-ssr] (ecmascript) <export table_body_default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-CIL4Y7FA.mjs [app-ssr] (ecmascript) <export table_row_default as TableRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/table/dist/chunk-F3UDT23P.mjs [app-ssr] (ecmascript) <export table_cell_default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs [app-ssr] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-ssr] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$UKLRQS27$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/modal/dist/chunk-UKLRQS27.mjs [app-ssr] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$NWAOTABO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/modal/dist/chunk-NWAOTABO.mjs [app-ssr] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$IGSAU2ZA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/modal/dist/chunk-IGSAU2ZA.mjs [app-ssr] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/modal/dist/chunk-FOPEYBSC.mjs [app-ssr] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$O5MCAK4F$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/modal/dist/chunk-O5MCAK4F.mjs [app-ssr] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@heroui/use-disclosure/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AnimateNumber.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const EvacAndRepatriation = ()=>{
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("KES");
    const [exchangeRates, setExchangeRates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isOpen, onOpen, onClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisclosure"])();
    const currencySymbols = {
        USD: "$",
        KES: "KSh",
        EUR: "€",
        GBP: "£"
    };
    const insurancePlans = [
        {
            plan: "Plan 1",
            limit: 100000,
            premium: 3500
        },
        {
            plan: "Plan 2",
            limit: 200000,
            premium: 7000
        },
        {
            plan: "Plan 3",
            limit: 300000,
            premium: 10500
        },
        {
            plan: "Plan 4",
            limit: 500000,
            premium: 14400
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchExchangeRates = async ()=>{
            try {
                const response = await axios.get("https://snownet-customer-quotation-server.onrender.com/api/underwriting/quotation/onlineQuotation/products/exchangeRate/");
                const ratesMap = {};
                for (let item of response.data?.data || []){
                    if (item.currency && item.x_rate) {
                        ratesMap[item.currency] = parseFloat(item.x_rate);
                    }
                }
                setExchangeRates(ratesMap);
            } catch (error) {
                console.error("❌ Failed to fetch exchange rates:", error);
            }
        };
        fetchExchangeRates();
    }, []);
    const handleOpenDialog = (plan)=>{
        setSelectedPlan(plan);
        onOpen();
    };
    const handleClickEvacAndRepatriation = ()=>{
        window.location.href = "https://quote.birdviewinsurance.com/?ProductID=1";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-gradient-to-br from-gray-50 via-blue-50 to-white py-12 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                                shadow: "sm",
                                className: "border border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-semibold text-blue-600 mb-2",
                                            children: "Evacuation and Repatriation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-5",
                                            children: "Our worldwide evacuation and repatriation cover is crafted to intervene and rescue situations of citizens being either stranded or deceased abroad. This removes the financial burden of evacuations and/or body repatriations from the government and affected families."
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-blue-600 mb-3",
                                                    children: "Benefit Summary:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-3 text-gray-700 list-disc pl-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Evacuation on Medical Emergency:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                    lineNumber: 101,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Cash payout",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-600 font-bold",
                                                                    children: "25%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " of benefit upon evacuation."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Force Return/Deportation:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Cash payout",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-600 font-bold",
                                                                    children: "50%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " of benefit."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Repatriation in the Event of Demise:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Pay",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-600 font-bold",
                                                                    children: "100%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " of benefit to the next of kin/nominated beneficiary."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                                shadow: "sm",
                                className: "border border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$select$2f$dist$2f$chunk$2d$Y2AYO5NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__select_default__as__Select$3e$__["Select"], {
                                            label: "Select Currency",
                                            selectedKeys: [
                                                currency
                                            ],
                                            onChange: (e)=>setCurrency(e.target.value),
                                            className: "mb-4",
                                            children: [
                                                "KES",
                                                "USD",
                                                "EUR",
                                                "GBP"
                                            ].map((cur)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$listbox$2f$dist$2f$chunk$2d$BJFJ4DRR$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__SelectItem$3e$__["SelectItem"], {
                                                    children: cur
                                                }, cur, false, {
                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$S6VICFMP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
                                                "aria-label": "Pricing Table",
                                                isStriped: true,
                                                removeWrapper: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "bg-blue-600 text-white text-center",
                                                                children: "Plan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "bg-blue-600 text-white text-center",
                                                                children: "Benefit Cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                                                                className: "bg-blue-600 text-white text-center",
                                                                children: "Premium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                                                        children: insurancePlans.map((plan, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                                                                className: "cursor-pointer hover:bg-blue-50",
                                                                onClick: ()=>handleOpenDialog(plan),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                                            size: "sm",
                                                                            color: "primary",
                                                                            radius: "sm",
                                                                            endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                                lineNumber: 160,
                                                                                columnNumber: 69
                                                                            }, void 0),
                                                                            children: plan.plan
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            value: Number(plan.limit) * (exchangeRates[currency] || 1),
                                                                            prefix: currencySymbols[currency],
                                                                            color: "text-blue-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                            lineNumber: 166,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                                                        className: "text-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            value: Number(plan.premium) * (exchangeRates[currency] || 1),
                                                                            prefix: currencySymbols[currency],
                                                                            color: "text-green-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                            lineNumber: 175,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 md:hidden",
                                            children: insurancePlans.map((plan, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                                                    shadow: "sm",
                                                    className: "border border-gray-200 cursor-pointer hover:shadow-md",
                                                    onClick: ()=>handleOpenDialog(plan),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold",
                                                                children: plan.plan
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-blue-600 text-sm",
                                                                children: [
                                                                    "Benefit Cover:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        value: Number(plan.limit) * (exchangeRates[currency] || 1),
                                                                        prefix: currencySymbols[currency],
                                                                        color: "text-blue-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-green-600 text-sm",
                                                                children: [
                                                                    "Premium:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        value: Number(plan.premium) * (exchangeRates[currency] || 1),
                                                                        prefix: currencySymbols[currency],
                                                                        color: "text-green-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, idx, false, {
                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-gray-700 mb-2",
                                children: "Ready to take the next step?"
                            }, void 0, false, {
                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                lineNumber: 232,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                size: "lg",
                                color: "danger",
                                radius: "full",
                                className: "font-bold shadow-md",
                                endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 37
                                }, void 0),
                                onClick: handleClickEvacAndRepatriation,
                                children: "Get Quote"
                            }, void 0, false, {
                                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                lineNumber: 235,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                        lineNumber: 231,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$UKLRQS27$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                isOpen: isOpen,
                onClose: onClose,
                size: "lg",
                backdrop: "blur",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$NWAOTABO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                    children: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$IGSAU2ZA$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                                    className: "bg-blue-800 text-white",
                                    children: [
                                        selectedPlan?.plan,
                                        " Details"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                                    children: selectedPlan && Object.entries(selectedPlan).map(([key, value])=>key !== "plan" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between py-2 border-b border-gray-200 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium capitalize text-gray-700",
                                                    children: key
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-900",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimateNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        value: Number(value) * (exchangeRates[currency] || 1),
                                                        prefix: currencySymbols[currency],
                                                        color: "text-gray-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 57
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$O5MCAK4F$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                        color: "danger",
                                        variant: "light",
                                        onPress: onClose,
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                    lineNumber: 250,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
                lineNumber: 249,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/evacuation_and_repatriation/page.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = EvacAndRepatriation;
}),
];

//# sourceMappingURL=_38952b95._.js.map